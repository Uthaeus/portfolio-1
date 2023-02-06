
import Card from '../UI/Card';

import classes from './About.module.css';

const About = () => {

    return (
        <div className={classes.about}>
            <div className={classes.title}>
                <h1>About Homer</h1>
                <Card>
                    <p>This is a little snippet telling a short, charming description about what i like and why</p>
                </Card>
            </div>
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