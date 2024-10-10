import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css"





function NavigationsBar() {



    return (
        <>
            <nav className={styles["navbar"]}>
                <Link to="/"className={styles.link}>Home</Link>
                <Link to="/addcard"className={styles.link}>Add a card</Link>

            </nav>
        </>
    )
}

export default NavigationsBar