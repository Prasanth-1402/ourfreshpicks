import React, {useState, useEffect} from 'react';
import CurrencyFormat from 'react-currency-format';
import './Payment.css';
import {useStateValue} from './StateProvider';
import {GetUserName} from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import {Link, useHistory} from 'react-router-dom';
import {getCartTotal} from './Reducer';
import {db} from './firebase';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from './axios';
function Payment() {
  const history = useHistory();
  const [{cart, user, address}, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    const getClientSecret = async () => {
      let amount = getCartTotal(cart);
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${Math.floor(amount * 100)}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {card: elements.getElement(CardElement)},
      })
      .then(({paymentIntent}) => {
        //paymentIntent makes sure that payment was successful
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            address,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: 'EMPTY_CART',
        });
        history.replace('/orders');
      });
  };
  const handleChange = (e) => {
    //checks for changes in the cardElement & updates live
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h2>
          Checkout (<Link to="/Checkout">{cart?.length} items</Link>)
        </h2>
        {/*Payment section - address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address </h3>
          </div>
          <div className="payment__address">
            <p>
              <GetUserName />
            </p>
            <small>{address}</small>
          </div>
        </div>
        {/*Payment section - review Items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items for Delivery </h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/*Payment section  - payment method*/}
        <div className="payment__section">
          <div className="payment__title">
            {' '}
            <h3>Payment Method </h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3> Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={'text'}
                  thousandSeperator={true}
                  prefix={'₹'}
                />
                <button
                  disabled={
                    processing ||
                    disabled ||
                    succeeded ||
                    getCartTotal(cart) === 0
                  }
                >
                  <span>{processing ? 'Processing...' : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
