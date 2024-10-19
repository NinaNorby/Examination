import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"




function NavigationsBar() {
    //Hambugaremenyn 
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    //Funktion för att växla mellan att visa och dölja menyn
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <nav className={styles["navbar"]}>
                <div className={styles["menu-icon"]} onClick={toggleMenu}>
                    {/* visar antingen  hamburgermenyn eller hamburgareikon */}
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isMenuOpen ? styles["nav-menu active"] : styles["nav-menu"]}>
                    <li className={styles["nav-item"]}>
                        <Link to="/" className={styles["nav-link"]} onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className={styles["nav-item"]}>
                    <Link to="/addcard" className={styles["nav-link"]} onClick={toggleMenu}>Add a card</Link>
                </li>
                    <li className={styles["nav-item"]}>
                        <Link to="/settings" className={styles["nav-link"]} onClick={toggleMenu}>Settings</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationsBar