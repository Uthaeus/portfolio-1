
import classes from './Projects.module.css';

const Projects = (props) => {
    // when logged in be able to add a new project
    

    const addProject = <button>Add New Project</button>;

    return (
        <div className={classes.projects}>
            <h1>Projects Page</h1>
            {props.isLogged ? addProject : null}
            <div>

            </div>
        </div>
    );
};


export default Projects;