
import styles from '../styles/navbar.module.css'
import ProjectCard from '../Components/ProjectCard';

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
    {projects.map((project, index) => (
      <ProjectCard key={index} title={project.title} imgSrc={project.imgSrc} content={project.content} />
    ))}
    </div>
    );
}



export default Projects;