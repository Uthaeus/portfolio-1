import { Link } from 'react-router-dom';


import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div>My Portfolio</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact-me'>Contact Me</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        {props.isLogged ? <Link to='/'><span onClick={props.logOut}>Log Out</span></Link> : <Link to='/login'>Log In</Link>}
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;