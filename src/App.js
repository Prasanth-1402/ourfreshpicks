import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import './index.css';
import Orders from './Orders.js';
import {useEffect} from 'react';
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';
import Payment from './Payment';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51I6yWmGAwh0uRQFnpCMOeNDQPYIr4fgZgosVC5HbvglXi46PLMXgISnLCB1TSIBfaNFpYyDxfTxyYcIHUZNrNZaJ00K5A8IHEM'
);
function App() {
  const [{cart}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
