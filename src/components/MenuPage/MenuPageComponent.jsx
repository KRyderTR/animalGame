import MenuButtonComponent from "../MenuButton/MenuButtonComponent";
import styles from "./MenuPage.module.css";
import menuLogo from "../../assets/images/shaya's-logo.png";
import startSound from "../../assets/sounds/start-sound.mp3";
import clickSound from "../../assets/sounds/click-sound.mp3";

const MenuPageComponent = () => {
  return (
    <div className={styles.menuPage}>
      <div className={styles.titleContainer}>
      <img src={menuLogo} className={styles.menuLogo} alt="Shaya's logo"/>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menuBtnsContainer}>
          <MenuButtonComponent to="/animalGame/game" label="Start Game" sound={startSound} />
          <MenuButtonComponent to="/animalGame/howToPlay" label="How to Play" sound={clickSound} />
          <MenuButtonComponent to="/animalGame/about" label="About" sound={clickSound} />
        </div>
      </div>
    </div>
  );
};

export default MenuPageComponent;
