import { Link } from "react-router-dom";
import PropTypes from "prop-types"; 
import styles from "./MenuButton.module.css";

const MenuButtonComponent = ({ to, label }) => {
  return (
    <button className={styles.menuButton}>
      <Link to={to}>{label}</Link>
    </button>
  );
};

MenuButtonComponent.propTypes = {
  to: PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired,
};

export default MenuButtonComponent;
