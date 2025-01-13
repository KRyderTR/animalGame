import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./components/MenuPage/MenuPageComponent.jsx";
import GamePage from "./components/GamePage/GamePageComponent.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/animalGame/" element={<MenuPage />} />
        <Route path="/animalGame/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
};

export default App;
