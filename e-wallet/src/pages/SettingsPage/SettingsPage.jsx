import { useState } from 'react';
import styles from './SettingsPage.module.css';

function SettingsPage({ cards, setCards, setTheme }) {
    const [theme, setThemeChoice] = useState('light'); // Default tema

    // Funktion för att uppdatera valt tema
    const handleThemeChange = (e) => {
        const selectedTheme = e.target.value;
        setThemeChoice(selectedTheme);
        setTheme(selectedTheme); // Sätter temat i appens state
        console.log("Selected theme:", selectedTheme); // För felsökning
    };

    // Funktion för att radera alla inaktiva kort
    const handleDeleteInactive = () => {
        const activeCards = cards.filter(card => card.active);
        setCards(activeCards); // Uppdatera listan med endast aktiva kort
    };

    return (
        <div className={styles["settings-wrapper"]}>
            <h2>Settings</h2>

            {/* Välj teman */}
            <div>
                <label>Select theme: </label>
                <select value={theme} onChange={handleThemeChange}>
                    <option value="light">Day Light</option>
                    <option value="dark">Night</option>
                    <option value="green">Forest</option>
                </select>
            </div>

            {/* Radera alla inaktiva kort */}
            <div>
                <button onClick={handleDeleteInactive} className={styles["settings-btn"]}>Delete All Inactive Cards</button>
            </div>
        </div>
    );
}

export default SettingsPage;
