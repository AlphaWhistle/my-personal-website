import Image from 'next/image';

import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, imgSrc, content, W = 400, H=400 }) => {
  return (
    <div className={styles.ProjectCard}>
      <h3 className={styles.title}>{title}</h3>
      <Image src={imgSrc} alt="favicon.ico" width={W} height={H} />
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default ProjectCard;