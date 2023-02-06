
import Card from '../UI/Card';

import classes from './About.module.css';

const About = () => {

    return (
        <div className={classes.about}>
            <h1>About Page</h1>
            <Card>
                <h3>Homer J. Simpson</h3>
                <p>(555)555-5555</p>
                <p>homer@testmail.net</p>
                <p>Springfield, IL</p>
            </Card>
        </div>
    );
};


export default About;