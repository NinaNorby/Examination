import styles from "./Footer.module.css"

function Footer() {

    let year = new Date().getFullYear();
    return (
        <div className="footer">
            <p className= {styles["footer-paragraph"]}> Copyrigth {year}</p>
        </div>
    )
}

export default Footer;