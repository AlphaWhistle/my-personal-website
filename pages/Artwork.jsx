import styles from "../styles/Artwork.module.css";
import ProjectCard from "../Components/ProjectCard";


const Artwork = () => {
    const projects = [
        {
            title: 'The Red Ball',
            imgScr: '/Red_Ball_002.gif',
            content:
                'The Standard intro to animation project',
            Height: 400,
            Width: 400,
        },

        {
            title: 'The Ice Frog',
            imgScr: '/frog_ice_001.png',
            content:
                'A study of frogs, and snow',
            Height: 400,
            Width: 400,
        },

        {
            title: 'A Flying Eye',
            imgScr: '/Enemy_001.gif',
            content:
                'A potential enemy for a dungeon game',
            Height: 165,
            Width: 240,
        },

        {
            title: 'A Rocket Ship',
            imgScr: '/Ship_001.gif',
            content:
                'A study of fire, and Rocket Ships',
            Height: 168,
            Width: 128,
        },

    ]
    return(
    <div className= {styles.Artwork}>
    <h1>My Art</h1>
    <br />
    <br />
    {projects.map((project, index) => (
      <ProjectCard key={index} title={project.title} imgSrc={project.imgScr} content={project.content} W={project.Width} H={project.Height} />
    ))}

    
    </div>
    );
};

export default Artwork;