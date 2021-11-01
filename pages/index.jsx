
import styles from '../styles/home.module.css';
import Button from '../Components/Button';

const home = () => {
  return (
  <div className={styles.home}>
  <h1>Hi, I'm Patrick</h1>
  <p>Student, Programmer, Artist</p>
  <Button path= "About">About</Button>
  <Button path="Projects">My Projects</Button>
  </div>
  );

};

export default home;
