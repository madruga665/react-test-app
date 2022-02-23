import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import CardsPage from "./Pages/CardsPage";
import FormsPage from "./Pages/FormsPage";
import { GlobalStyle } from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards' element={<CardsPage />} />
        <Route path='/form' element={<FormsPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
