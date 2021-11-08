import styles from "../styles/Artwork.module.css";
import ProjectCard from "../Components/ProjectCard";


const Artwork = () => {
    const projects = [
        {
            title: 'The Red Ball',
            imgScr: '/Red_Ball_002.gif',
            content:
                'The Standard intro to animation project',
        },
        
    ]
    return(
    <div className= {styles.Artwork}>
    <h1>My Art</h1>
    <br />
    <br />
    {projects.map((project, index) => (
      <ProjectCard key={index} title={project.title} imgSrc={project.imgScr} content={project.content} />
    ))}
    </div>
    );
};

export default Artwork;