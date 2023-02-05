import { useRef } from "react";

import classes from './Login.module.css';

const Login = (props) => {
    const correctPassword = 'abc123';

    const passwordInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        const enteredPassword = passwordInputRef.current.value;

        if (enteredPassword === correctPassword) {
            // redirect to Home as logged in
            props.isLogged(true);
        } else {
            // open modal indicating failed login
            e.target.value = '';
        }
    }

    return (
        <div className={classes.login}>
            <h1>Login Page</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <label htmlFor="pass">Enter Password</label>
                    <input type='password' id='pass' required ref={passwordInputRef} />
                    <button type='submit'>Enter</button>
                </form>
            </div>
            <h5>Password is abc123</h5>
        </div>
    );
};


export default Login;