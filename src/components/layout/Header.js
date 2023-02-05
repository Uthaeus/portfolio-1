

import Button from '../UI/Button';

import classes from './Header.module.css';

const Header = props => {

    return (
        <div className={classes.header}>
            <p>Header/Nav</p>
            <div className={classes['nav-links']}>
                <Button val='Home' />
                <Button val='About' />
                <Button val='Blogs' />
                <Button val='Contact Me' />
            </div>
        </div>
    );
};


export default Header;