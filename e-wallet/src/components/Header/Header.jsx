import React from "react";
import styles from './Header.module.css';

let companyName = "E-Wallet";

function Header() {
  return (
    <div className="header">
      <h1 className={styles["header-title"]}>{companyName}</h1> {/* Rätt sätt att använda styles */}
    </div>
  );
}

export default Header;
