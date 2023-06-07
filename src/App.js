import "./App.css";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Services from "./Components/Services";
import { Route, Routes } from "react-router-dom";
import Marketing from "./Components/Marketing";
import Development from "./Components/Development";
import Profil from "./Components/Profil";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/development" element={<Development />} />
        </Route>
        <Route path="/profil/:id" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
