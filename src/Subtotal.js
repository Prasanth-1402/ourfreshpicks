import React, {useState} from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import {useStateValue} from './StateProvider';
import {getCartTotal} from './Reducer';
import {useHistory} from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
  const [{cart}, dispatch] = useStateValue();
  const [address, setAddress] = useState(' ');
  const assignAddress = (event) => {
    setAddress(event.target.value);
    dispatch({
      type: 'SET_ADDRESS',
      address,
    });
  };
  return (
    <div className="subtotal">
      <form>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                <>Number of Items : {cart?.length} </>
                <br />
              </p>
              <>Delivery Address : </>
              <br />
              <textarea
                className="subtotal__textarea"
                placeholder="Enter your Full Address here to Proceed Further"
                value={address}
                onChange={(event) => assignAddress(event)}
                required
              ></textarea>
              <p className="amount">
                <strong>Total Price : </strong>
                <strong> {value} </strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={'text'}
          thousandSeperator={true}
          prefix={'₹'}
        />

        {address.length > 15 && (
          <button
            className="subtotal__button"
            onClick={(e) => history.push('/payment')}
          >
            Proceed to Checkout
          </button>
        )}
      </form>
    </div>
  );
}

export default Subtotal;
