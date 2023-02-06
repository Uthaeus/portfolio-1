import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";

import classes from './Login.module.css';

const Login = (props) => {
    const correctPassword = 'abc123';

    const navigate = useNavigate();

    const passwordInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        const enteredPassword = passwordInputRef.current.value;

        if (enteredPassword === correctPassword) {
            // redirect to Home as logged in
            props.isLogged(true);
            navigate('/');
        } else {
            // open modal indicating failed login
            e.target.value = '';
        }
    }

    return (
        <div className={classes.login}>
            <h1>Login Page</h1>
            <Card>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="pass">Enter Password</label>
                        <input type='password' id='pass' required ref={passwordInputRef} />
                    </div>
                    <div className={classes.actions}>
                        <button type='submit'>Enter</button>
                    </div>
                </form>
            </Card>
            <h5>Password is abc123</h5>
        </div>
    );
};


export default Login;