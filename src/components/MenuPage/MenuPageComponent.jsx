import MenuButtonComponent from "../MenuButton/MenuButtonComponent";
import styles from "./MenuPage.module.css";

const MenuPageComponent = () => {
  return (
    <div className={styles.menuPage}>
      <div className={styles.titleContainer}>
        <h1>Animal Quiz Game</h1>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menuBtnsContainer}>
          <MenuButtonComponent to="/animalGame/game" label="Start Game" />
          <MenuButtonComponent to="/animalGame/howToPlay" label="How to Play" />
          <MenuButtonComponent to="/animalGame/about" label="About" />
        </div>
      </div>
    </div>
  );
};

export default MenuPageComponent;
