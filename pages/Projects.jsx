
import styles from '../styles/Project.module.css'
import ProjectCard from '../Components/ProjectCard';
import Button from "../Components/Button"


const Projects = () => {
    const projects = [
        {
            title: 'ASTERPOCALYPSE',
            imgScr: '/spaceship.png',
            content:
                'This is a 2d space shooter game, made with python 3 and tkinter. In it you control a ship with your mouse, and shoot the asteroids',

        },
        
    ]
    return(
    <div className= {styles.projects}>
    <h1>My Projects</h1>
    <br />
    <br />
    {projects.map((project, index) => (
      <ProjectCard key={index} title={project.title} imgSrc={project.imgScr} content={project.content} />
    ))}
    <Button>Git</Button>
    </div>
    );
}



export default Projects;