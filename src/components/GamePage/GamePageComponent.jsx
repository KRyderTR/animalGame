import { useState, useEffect, useMemo } from "react";
import AnimalCard from "../AnimalCard/AnimalCardComponent";
import styles from "./GamePage.module.css";
import { animals as originalAnimals } from "../../data/animals.js";
import correctSound from "../../assets/sounds/correct-sound.mp3";
import mistakeSound from "../../assets/sounds/game-over-sound.mp3";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const preloadImages = (imagePaths) => {
  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
};

const GamePageComponent = () => {
  useEffect(() => {
    // Preload all animal images when the component mounts
    preloadImages(originalAnimals.map((animal) => animal.image));
  }, []);

  const [shuffledAnimals, setShuffledAnimals] = useState(
    shuffleArray([...originalAnimals])
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [highlightedButton, setHighlightedButton] = useState(null);

  const currentAnimal = shuffledAnimals[currentIndex];

  const options = useMemo(() => {
    if (!currentAnimal) return [];
    const otherAnimals = shuffledAnimals.filter(
      (animal) => animal.name !== currentAnimal.name
    );
    const randomOptions = shuffleArray([...otherAnimals])
      .slice(0, 3)
      .map((animal) => animal.name);
    return shuffleArray([...randomOptions, currentAnimal.name]);
  }, [currentAnimal, shuffledAnimals]);

  const handleClick = (sound, score, currentIndex, time, isGameOver) => {
    const audio = new Audio(sound);
    audio.play();

    setTimeout(() => {
      setScore(score);
      setCurrentIndex(currentIndex);
      setHighlightedButton(null);
      if (isGameOver) {
        setIsGameOver(true);
      }
    }, time);
  };

  const handleAnswer = (answer) => {
    // Correct answer
    if (answer === currentAnimal.name) {
      setHighlightedButton(answer); // Highlight the correct button
      if (currentIndex < shuffledAnimals.length - 1) {
        // Continue game
        handleClick(correctSound, score + 1, currentIndex + 1, 300, false);
      } else {
        // Game over
        handleClick(correctSound, score + 1, currentIndex, 400, true);
      }

      // Mistake
    } else {
      if (currentIndex < shuffledAnimals.length - 1) {
        // Continue game
        handleClick(mistakeSound, score, currentIndex + 1, 500, false);
      } else {
        // Game over
        handleClick(mistakeSound, score, currentIndex, 600, true);
      }
    }
  };

  const resetGame = () => {
    setShuffledAnimals(shuffleArray([...originalAnimals]));
    setCurrentIndex(0);
    setScore(0);
    setIsGameOver(false);
    setHighlightedButton(null);
  };

  return (
    <div className={styles.gamePage}>
      <h2 className={styles.score}>Score: {score}</h2>
      {!isGameOver ? (
        <AnimalCard
          animal={currentAnimal}
          options={options}
          handleAnswer={handleAnswer}
          highlightedButton={highlightedButton} // Pass highlightedButton to AnimalCard
        />
      ) : (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>GREAT</h2>
            <h3>Your score is: {score} points 😀</h3>
            <div className={styles.modalButtonsContainer}>
              <button onClick={resetGame}>Restart</button>
              <button onClick={() => (window.location.href = "/")}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePageComponent;
