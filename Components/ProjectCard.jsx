import Image from 'next/image';

import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, imgSrc, content }) => {
  return (
    <div className={styles.ProjectCard}>
      <h3 className={styles.title}>{title}</h3>
      <Image src={imgSrc} alt="project image" width={400} height={200} />
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default ProjectCard;