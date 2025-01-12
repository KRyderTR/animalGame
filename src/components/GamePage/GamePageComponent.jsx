import { useState } from "react";
import AnimalCard from "../AnimalCard/AnimalCardComponent";
import styles from "./GamePage.module.css";
import { animals as originalAnimals } from "../../data/animals.js";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const GamePage = () => {
  const [shuffledAnimals, setShuffledAnimals] = useState(
    shuffleArray([...originalAnimals])
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentAnimal = shuffledAnimals[currentIndex];

  const generateOptions = () => {
    const otherAnimals = shuffledAnimals.filter(
      (animal) => animal.name !== currentAnimal.name
    );
    const randomOptions = otherAnimals
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((animal) => animal.name);
    return [...randomOptions, currentAnimal.name].sort(
      () => Math.random() - 0.5
    );
  };

  const options = generateOptions();

  const handleAnswer = (answer) => {
    if (answer === currentAnimal.name) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert("Wrong! Try again.");
    }

    if (currentIndex < shuffledAnimals.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Game over! Your score: ${score + 1}`);
      resetGame();
    }
  };

  const resetGame = () => {
    setShuffledAnimals(shuffleArray([...originalAnimals]));
    setCurrentIndex(0);
    setScore(0);
  };

  return (
    <div className={styles.gamePage}>
      <div className={styles.animalCardContainer}>
        <h2>Score: {score}</h2>
        <AnimalCard
          animal={currentAnimal}
          options={options}
          handleAnswer={handleAnswer}
        />
      </div>
    </div>
  );
};

export default GamePage;
