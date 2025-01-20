import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; 
import styles from "./MenuButton.module.css";

const MenuButtonComponent = ({ to, label, sound }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent immediate navigation
    const audio = new Audio(sound);
    audio.play();

    // Navigate to the link after sound plays (slight delay)
    setTimeout(() => {
      navigate(to);
    }, 500); // Adjust delay to match the length of your sound
  };

  return (
    <button className={styles.menuButton} onClick={handleClick}>
      {label}
    </button>
  );
};

MenuButtonComponent.propTypes = {
  to: PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired, 
};

export default MenuButtonComponent;
