/** @format */

import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
};

export default App;
