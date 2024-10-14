import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css"





function NavigationsBar() {



    return (
        <>
            <nav className={styles["navbar"]}>
                <Link to="/addcard"className={styles.link}>Add a card</Link>
                <Link to="/"className={styles.link}>Home</Link>
                <Link to="/settings"className={styles.link}>Settings</Link>


            </nav>
        </>
    )
}

export default NavigationsBar