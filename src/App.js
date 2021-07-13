/** @format */

import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import theme from "./style/theme";
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
};

export default App;
