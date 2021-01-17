import React, {useState} from 'react';

import './Register.css';
import {useHistory, Link} from 'react-router-dom';

import registerVideo from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/regBg.jpg';
import {auth} from './firebase';
function Register() {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        history.push('/');
      }
    });
  };
  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://i.postimg.cc/d7BHw944/7a3e101c-6c6f-4d35-97d6-a095618a0bba-200x200.png"
          alt="freshPicks"
        />
      </Link>
      <div className="register__container">
        <div className="register__header">
          <h3>Register</h3>
        </div>

        <div className="wrapper">
          <div className="group">
            <input
              className="register__input"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>E-Mail ID</label>
          </div>

          <div className="group">
            <input
              className="register__input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Password</label>
          </div>
        </div>

        <button className="register__btn" type="submit" onClick={register}>
          Register
        </button>
        <Link to="/">
          <button className="register__btn">cancel</button>
        </Link>
      </div>
      {/* <video className="register__vid" autoPlay muted loop>
        <source src={registerVideo} />
      </video> */}
      <img className="register__img" alt="" src={registerVideo} />
    </div>
  );
}

export default Register;
