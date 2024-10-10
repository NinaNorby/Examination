import styles from './CardForm.module.css';

function CardForm({
    cardNumber,
    setCardNumber,
    cardHolder,
    setCardHolder,
    expireMonth,
    setExpireMonth,
    expireYear,
    setExpireYear,
    cvc,
    setCvc,
    vendor,
    setVendor,
    handleSubmit
}) {
    return (
        <>
            {/* Formulärkomponenten */}
            <h2 className={styles['card-form-title']}>Lägg till kort</h2>
            <div className={styles['form-wrapper']}>
                <form className={styles['form-add-card']} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Card number (16 digits)"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className={styles.input} 
                    />
                    <input
                        type="text"
                        placeholder="Cardholder's Name"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        className={styles.input} 
                    />
                    <input
                        type="text"
                        placeholder="Expiry date (month)"
                        value={expireMonth}
                        onChange={(e) => setExpireMonth(e.target.value)}
                        className={styles.input} 
                    />
                    <input
                        type="text"
                        placeholder="Expiry date (year)"
                        value={expireYear}
                        onChange={(e) => setExpireYear(e.target.value)}
                        className={styles.input} 
                    />
                    <input
                        type="text"
                        placeholder="CVC (3 digits)"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        className={styles.input} 
                    />
                    <select
                        value={vendor}
                        onChange={(e) => setVendor(e.target.value)}
                        className={styles['select-vendor']}
                    >
                        <option value="">Välj Kortutgivare</option>
                        <option value="SEB">SEB</option>
                        <option value="Swedbank">Swedbank</option>
                        <option value="Handelsbanken">Handelsbanken</option>
                    </select>
                    <button className={styles.button} type="submit">Lägg till Kort</button> 
                </form>
            </div>
        </>
    );
}

export default CardForm;
