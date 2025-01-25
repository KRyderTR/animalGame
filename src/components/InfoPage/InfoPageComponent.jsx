import PropTypes from "prop-types";
import styles from "./InfoPage.module.css";

const InfoPageComponent = ({ data }) => {
  const { title, text, image } = data;

  return (
    <div className={styles.infoPageContainer}>
      <div className={styles.textContainer}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.infoImage} alt={title} />
      </div>
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
