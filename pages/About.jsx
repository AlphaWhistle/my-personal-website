import styles from '../styles/About.module.css'
import Image from 'next/image';

const About = () => {
    return <div className={styles.about}>
        <header>
            <div
                style={{
                display: "flex",
                justifyContent: "center",}}
            >
                <Image src="/About_Me_pic_1.jpg"width={378} height={351}></Image>
            </div>
            <h1>~ Student / Programmer / Artist ~</h1>
            <p>Hi there, I'm Patrick Matuszek
                <br />
                <br />
                Who am I?
                <br />
                <br />
                Currently I am a first year student at University of Toronto Mississauga campus, and am pursuing a degree in Computer Science
                <br />
                <br />
                In my free time, I do pixel art and animation, which you can check out in the Artwork tab of this Website. As of now I am slowly uploading all my previous projects 
                and so it may seem a little bare at the moment
                <br />
                <br />
                I am currently designing the art and level design of a 2D puzzle game I plan on creating in the near future, called "Thalssophobia"
                This is a pretty big project, but updates will be posted on this website under the Projects page.
                <br />
                <br />
                I hope my work interests you
            </p>

        </header>
    </div>;
};

export default About;