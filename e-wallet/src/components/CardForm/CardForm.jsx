import { useSelector, useDispatch } from 'react-redux';
import {
    setCardNumber,
    setCardHolder,
    setExpireMonth,
    setExpireYear,
    setCvc,
    setVendor
} from '../../redux/cardSlice';
import styles from './CardForm.module.css';

function CardForm({ handleSubmit, errors }) {
    const dispatch = useDispatch();
    const cardNumber = useSelector((state) => state.cards.newCard.cardNumber);
    const cardHolder = useSelector((state) => state.cards.newCard.cardHolder);
    const expireMonth = useSelector((state) => state.cards.newCard.expireMonth);
    const expireYear = useSelector((state) => state.cards.newCard.expireYear);
    const cvc = useSelector((state) => state.cards.newCard.cvc);
    const vendor = useSelector((state) => state.cards.newCard.vendor);

    return (
        <>
            <h2 className={styles['card-form-title']}>Card details</h2>
            <div className={styles['form-wrapper']}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Card number (16 digits)"
                        value={cardNumber}
                        onChange={(e) => dispatch(setCardNumber(e.target.value))}
                        className={styles.input}
                    />
                    {errors.cardNumber && <p className={styles.error}>{errors.cardNumber}</p>}

                    <input
                        type="text"
                        placeholder="Cardholder's Name"
                        value={cardHolder}
                        onChange={(e) => dispatch(setCardHolder(e.target.value))}
                        className={styles.input}
                    />
                    {errors.cardHolder && <p className={styles.error}>{errors.cardHolder}</p>}

                    <input
                        type="text"
                        placeholder="Expiry date (month)"
                        value={expireMonth}
                        onChange={(e) => dispatch(setExpireMonth(e.target.value))}
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Expiry date (year)"
                        value={expireYear}
                        onChange={(e) => dispatch(setExpireYear(e.target.value))}
                        className={styles.input}
                    />
                    {errors.expireDate && <p className={styles.error}>{errors.expireDate}</p>}

                    <input
                        type="text"
                        placeholder="CVC (3 digits)"
                        value={cvc}
                        onChange={(e) => dispatch(setCvc(e.target.value))}
                        className={styles.input}
                    />
                    {errors.cvc && <p className={styles.error}>{errors.cvc}</p>}

                    <select
                        value={vendor}
                        onChange={(e) => dispatch(setVendor(e.target.value))}
                        className={styles['select-vendor']}
                    >
                        <option value="">Select Card Issuer</option>
                        <option value="SEB">SEB</option>
                        <option value="Swedbank">Swedbank</option>
                        <option value="Handelsbanken">Handelsbanken</option>
                    </select>
                    {errors.vendor && <p className={styles.error}>{errors.vendor}</p>}

                    <button className={styles.button} type="submit">Add card</button>
                </form>
            </div>
        </>
    );
}

export default CardForm;
