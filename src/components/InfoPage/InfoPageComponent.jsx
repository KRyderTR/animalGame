import PropTypes from "prop-types";
import styles from "./InfoPage.module.css";

const InfoPageComponent = ({ data }) => {
  const { title, text, image } = data;

  return (
    <div className={styles.infoPageContainer}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={image} className={styles.infoImage} alt={title} />
    </div>
  );
};

// Define prop types for the component
InfoPageComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default InfoPageComponent;
