import { Link } from 'react-router-dom';

import classes from './Sidebar.module.css';

const Sidebar = () => {

    return (
        <div className={classes.sidebar}>
            <ul>
                <li>
                    <Link to='/'>
                        <i class="fa-brands fa-github"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i class="fa-brands fa-twitter"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i class="fa-brands fa-linkedin"></i>
                    </Link>
                </li>
            </ul>
        </div>
    );
};


export default Sidebar;