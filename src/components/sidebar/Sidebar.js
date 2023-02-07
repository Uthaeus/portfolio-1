import { Link } from 'react-router-dom';

import classes from './Sidebar.module.css';

const Sidebar = () => {

    return (
        <div className={classes.sidebar}>
            <ul>
                <li>
                    <Link to='/'>Git</Link>
                </li>
                <li>
                    <Link to='/'>Twit</Link>
                </li>
                <li>
                    <Link to='/'>Link</Link>
                </li>
            </ul>
        </div>
    );
};


export default Sidebar;