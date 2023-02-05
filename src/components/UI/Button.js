
import classes from './Button.module.css';

// val
// onClick

const Button = props => {
    return (
        <button onClick={props.onClick}>{props.val}</button>
    );
};


export default Button;