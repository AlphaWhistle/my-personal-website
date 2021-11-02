
import styles from '../styles/home.module.css';
import Button from '../Components/Button';

const home = () => {
  return (
  <div className={styles.home}>
  <h1>Hi</h1>
  <h1>Hi, I'm Patrick</h1>
  <p>Student, Programmer, Artist</p>
  <Button path= "About">About</Button>
  <Button path="Projects">My Projects</Button>
  <p>This Website is currently being built, I will add my projects and other work as time goes on</p>
  </div>
  );

};

export default home;
