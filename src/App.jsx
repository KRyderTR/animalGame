import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./components/MenuPage/MenuPageComponent.jsx";
import GamePage from "./components/GamePage/GamePageComponent.jsx";
import LayoutComponent from "./components/Layout/LayoutComponent.jsx";
import InfoPageComponent from "./components/InfoPage/InfoPageComponent.jsx";
import data from "./data/objects.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route path="/animalGame/" element={<MenuPage />} />
          <Route path="/animalGame/game" element={<GamePage />} />
          <Route path="/animalGame/howToPlay" element={<InfoPageComponent data={data.howToPlay} />} />
          <Route path="/animalGame/about" element={<InfoPageComponent data={data.about} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
