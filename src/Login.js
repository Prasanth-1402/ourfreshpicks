import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import loginVideo from '/Users/Prasanth_Shanmugam/Downloads/Major_Project/ourfreshpicks/src/images/loginBg.jpg';
import {auth} from './firebase';
function Login() {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        window.alert('Login Success');
        history.push('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const cancel = (e) => {
    e.preventDefault();
    window.alert('Login cancelled');
    history.push('/');
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__logo"
          src="https://i.postimg.cc/d7BHw944/7a3e101c-6c6f-4d35-97d6-a095618a0bba-200x200.png"
          alt="freshPicks"
        />

        <h2>Login</h2>
        <form className="login__form">
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="UserName"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="butn" onClick={login} type="submit">
            Login
          </div>
          <div className="butn" onClick={cancel}>
            cancel
          </div>
          <div>
            <br />
            <small>New User?</small>{' '}
            <Link to="/register">
              <strong className="signup">
                <b> Create Account</b>
              </strong>
            </Link>
          </div>
        </form>
      </div>
      {/* <video autoPlay muted className="login__vid">
        <source src={loginVideo} />
      </video> */}
      <img className="login__vid" src={loginVideo} alt="backgroundImage" />
    </div>
  );
}

export default Login;
