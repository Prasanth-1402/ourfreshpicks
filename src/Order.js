import React from 'react';
import './Order.css';
import CheckoutProduct from './CheckoutProduct';
import moment from 'moment';
// import {useStateValue} from './StateProvider';
import CurrencyFormat from 'react-currency-format';
function Order({order}) {
  //   const [{cart, user}, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>Order </h2>
      <p>On {moment.unix(order.data.created).format('DD MM YYYY @  h:mma')}</p>
      <p className="order__id">
        <small>Order ID : {order.id}</small>
      </p>
      {order.data.cart.map((item) => (
        <CheckoutProduct
          id={item.id}
          key={item.id + Math.random() * 100}
          price={item.price}
          rating={item.rating}
          title={item.title}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3>Order Total - {value} </h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeperator={true}
        prefix={'₹'}
      />
    </div>
  );
}

export default Order;
