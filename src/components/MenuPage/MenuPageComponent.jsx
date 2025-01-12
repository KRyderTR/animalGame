import { Link } from "react-router-dom";

const MenuPageComponent = () => {
  return (
    <div className="menu-page">
      <h1>Animal Quiz Game</h1>
      <button>
        <Link to="/game">Start Game</Link>
      </button>
    </div>
  );
};

export default MenuPageComponent;
