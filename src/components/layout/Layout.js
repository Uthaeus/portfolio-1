
import Header from './Header';

import classes from './Layout.module.css';

const Layout = props => {
    return (
        <div>
            <Header logOut={props.logOut} isLogged={props.isLogged} />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    );
};


export default Layout;