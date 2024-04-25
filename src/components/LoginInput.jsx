// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput'; 
 

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    return(
    <>
    <form>
        <h3 className="text-center mb-5">Login Page</h3>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="text" value={email} onChange={onEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">Enter your email correctly.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" value={password} onChange={onPasswordChange} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="d-grid gap-2">
            <button className="btn btn-dark" type="button" onClick={() => login({ email, password })}>Login</button>  
        </div>
    </form>
    </>
    )
}
LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
  };

export default LoginInput;