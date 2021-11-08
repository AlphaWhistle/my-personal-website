
import styles from '../styles/Project.module.css'
import ProjectCard from '../Components/ProjectCard';
import Button from "../Components/Button"


const Projects = () => {
    const projects = [
        {
            title: 'ASTERPOCALYPSE',
            imgScr: '/Thumbnail_Astro.png',
            content:
                'This is a 2d space shooter game, made with python and tkinter.',
            Width: 500,
            Height: 400,
        },
        
    ]
    return(
    <div className= {styles.projects}>
    <h1>My Projects</h1>
    <br />
    <br />
    {projects.map((project, index) => (
      <ProjectCard key={index} title={project.title} imgSrc={project.imgScr} content={project.content} W={project.Width} H={project.Height} />
    ))}
    <Button path= "https://github.com/AlphaWhistle/Asterpocalypse" ><a target="_blank" href= "https://github.com/AlphaWhistle/Asterpocalypse" >Git</a></Button>
    </div>
    );
}



export default Projects;