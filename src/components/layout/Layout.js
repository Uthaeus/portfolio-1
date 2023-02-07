
import Header from './Header';
import Sidebar from '../sidebar/Sidebar';

import classes from './Layout.module.css';

const Layout = props => {
    return (
        <div>
            <Header logOut={props.logOut} isLogged={props.isLogged} />
            <Sidebar />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    );
};


export default Layout;