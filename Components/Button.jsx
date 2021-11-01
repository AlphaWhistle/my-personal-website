import styles from "../styles/Button.module.css"
import router, { useRouter } from "next/router"

const Button = ({path, children = 'Click Me'}) => {
    const router = useRouter();

    return <button className={styles.customButton} onClick={() => router.push(path) }>{children}</button>
};

export default Button;
