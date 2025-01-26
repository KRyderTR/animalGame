import { useState } from "react";
import PropTypes from "prop-types";
import soundIcon from "../../assets/images/sound-icon1.png";
import styles from "./AnimalCard.module.css";

const AnimalCardComponent = ({
  animal,
  options,
  handleAnswer,
  highlightedButton,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const playAnimalSound = (animalName) => {
    const utterance = new SpeechSynthesisUtterance(animalName);
    utterance.lang = "en-US"; // Specify language
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={styles.animalCardContainer}>
      {!isLoaded && <div className={styles.skeleton}>Loading...</div>}
      <img
        src={animal.image}
        className={styles.animalImg}
        alt={animal.name}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? "block" : "none" }}
      />
      <div className={styles.options}>
        {options.map((option, index) => (
          <div key={index} className={styles.answerButtonContainer}>
            <button
              className={`${styles.answerBtn} ${
                option === highlightedButton ? styles.correctButton : ""
              }`} // Add class for highlighted button
              onClick={() => handleAnswer(option)}
            >
              <span className={styles.answerBtnText}>{option}</span>
            </button>
            <button
              className={styles.soundBtn}
              onClick={() => playAnimalSound(option)} // Call the function on click
            >
              <img
                src={soundIcon}
                className={styles.soundImg}
                alt="sound icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add PropTypes validation
AnimalCardComponent.propTypes = {
  animal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAnswer: PropTypes.func.isRequired,
  highlightedButton: PropTypes.string, // Add highlightedButton prop validation
};

export default AnimalCardComponent;
