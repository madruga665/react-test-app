import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import CardsPage from "./Pages/CardsPage";
import FormsPage from "./Pages/FormsPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cards' element={<CardsPage />} />
          <Route path='/form' element={<FormsPage />} />
        </Routes>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
