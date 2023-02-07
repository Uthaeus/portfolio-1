
import Header from './Header';
import Sidebar from '../sidebar/Sidebar';

import classes from './Layout.module.css';

const Layout = props => {
    return (
        <div>
            <Header logOut={props.logOut} isLogged={props.isLogged} />
            
            <main className={classes.main}>
                <Sidebar />
                {props.children}
            </main>
            
        </div>
    );
};


export default Layout;