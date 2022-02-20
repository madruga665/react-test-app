import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import CardsPage from "./Pages/CardsPage";
import FormsPage from "./Pages/FormsPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/cards' element={<CardsPage />} exact />
      <Route path='/form' element={<FormsPage />} exact />
    </Routes>
  );
};

export default App;
