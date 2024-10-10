import "../../components/CardForm/CardForm.css";

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
        <div className="form-wrapper">
            <form className="form-add-card" onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Cardholder's Name"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Expiry date (month)"
                    value={expireMonth}
                    onChange={(e) => setExpireMonth(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Expiry date (year)"
                    value={expireYear}
                    onChange={(e) => setExpireYear(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="CVC (3 digits)"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                />
                <select className="select-vendor"
                    value={vendor} onChange={(e) => setVendor(e.target.value)}>
                    <option value="">Välj Kortutgivare</option>
                    <option value="SEB">SEB</option>
                    <option value="Swedbank">Swedbank</option>
                    <option value="Handelsbanken">Handelsbanken</option>
                </select>
                <button type="submit">Lägg till Kort</button>
            </form>
        </div>
    );
}

export default CardForm;
