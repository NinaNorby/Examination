
import sebLogo from "../assets/SEB-logo.png";
import swedbankLogo from "../assets/Swedbank-logo.png";
import handelsbankenLogo from "../assets/Handelsbanken-logo.jpg";

export const getCardStyle = (vendor, styles) => {
    switch (vendor) {
        case "SEB":
            return { className: styles.green, logo: sebLogo, name: "SEB" };
        case "Swedbank":
            return { className: styles.orange, logo: swedbankLogo, name: "Swedbank" };
        case "Handelsbanken":
            return { className: styles.blue, logo: handelsbankenLogo, name: "Handelsbanken" };
        default:
            return { className: styles.gray, logo: "", name: "Unknown" };
    }
};
