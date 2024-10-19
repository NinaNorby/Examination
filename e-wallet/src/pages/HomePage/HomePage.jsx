import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardItem from '../../components/CardItem/CardItem';
import styles from './HomePage.module.css';

function HomePage() {
    const cards = useSelector((state) => state.cards.cards);

    return (
        <div className={styles['home-page']}>
            <h1>My cards</h1>
            {cards.length === 0 ? (
                <p> <em>No cards added yet</em>.</p>
            ) : (
                <>
                    {/*  AKTIVA kort */}
                    {cards.filter(card => card.active).map(card => (
                        <div key={card.cardNumber} className={styles['active-card']}>
                            <h2>Active card</h2>
                            <CardItem card={card} />
                            <Link to={`/card/${card.cardNumber}`} className={styles['link-button']}>View details</Link>
                        </div>
                    ))}

                    {/*  INAKTIVA kort */}
                    {cards.filter(card => !card.active).length > 0 && (
                        <h2>Inactive cards</h2>
                    )}
                    {cards.filter(card => !card.active).map(card => (
                        <div key={card.cardNumber} className={styles['inactive-card']}>
                            <CardItem card={card} />
                            <Link to={`/card/${card.cardNumber}`} className={styles['link-button']}>View details</Link>
                        </div>
                    ))}
                </>
            )}
            <Link to="/addcard" className={styles['link-button']}>Add new card</Link>
        </div>
    );
}

export default HomePage;
