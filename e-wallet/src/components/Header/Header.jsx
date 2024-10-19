import React from "react";
import styles from './Header.module.css';


function Header() {
  let companyName = "E-Wallet";
  return (
      <header className={styles.header}>
          <h1 className={styles["header-title"]}>{companyName}</h1>  
      </header>
  );
  }
  export default Header;
