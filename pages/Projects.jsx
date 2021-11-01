
import styles from '../styles/navbar.module.css'
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'ASTERPOCALYPSE',
            imgScr: '/',
            content:
                'This is a 2d space shooter game, made with python 3 and tkinter. In it you control a ship with your mouse, and shoot the asteroids'

        }
    ]
    return <div className= {styles.bodyText}>
        <h1>My Projects</h1>
        
        <p>ASTERPOCALYPSE
            <br />
            
            
            
        </p>
    </div>
}

export default Projects;