import PropTypes from "prop-types";
import soundIcon from "../../assets/images/sound-icon1.png";

const AnimalCardComponent = ({ animal, options, handleAnswer }) => {
  const playAnimalSound = (animalName) => {
    const utterance = new SpeechSynthesisUtterance(animalName);
    utterance.lang = "en-US"; // Specify language (English in this case)
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="animal-card">
      <img src={animal.image} width="300" alt={animal.name} className="animal-image" />
      <div className="options">
        {options.map((option, index) => (
          <div key={index} className="answer-button-container">
            <button
              className="answer-button"
              onClick={() => handleAnswer(option)}
            >
              <span className="answer-button-text">{option}</span>
            </button>
            <button
              className="sound-button"
              onClick={() => playAnimalSound(option)} // Call the function on click
            >
              <img src={soundIcon} width="30" className="sound-icon" alt="sound icon" />
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
};

export default AnimalCardComponent;
