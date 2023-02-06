import { useRef } from 'react';

import classes from './ContactMe.module.css';

const ContactMe = () => {
    const enteredName = useRef();
    const enteredEmail = useRef();
    const enteredComments = useRef();

    const submitHandler = e => {
        e.preventDefault();

    }

    return (
        <div className={classes['contact-me']}>
            <h1>Contact Me</h1>
            <h3>or just give me some notes</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' ref={enteredName} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' ref={enteredEmail} />
                    </div>
                    <div>
                        <label htmlFor='comments'>Comments/Feedback</label>
                        <textarea id='comments' cols='30' rows='6' ref={enteredComments}></textarea>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default ContactMe;