import { NavLink } from 'react-router-dom';


import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes['header-title']}>Homer's Portfolio</div>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to='/'
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/about'
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                        >About</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/contact-me'
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                        >Contact Me</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/projects'
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                        >Projects</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/blogs'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >Blogs</NavLink>
                    </li>
                    <li>
                        {props.isLogged ? <NavLink to='/'><span onClick={props.logOut}>Log Out</span></NavLink> : <NavLink to='/login' className={({ isActive }) => isActive ? classes.active : undefined}>Log In</NavLink>}
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;