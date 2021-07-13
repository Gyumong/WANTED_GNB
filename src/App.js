/** @format */

import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Career from "./pages/Career";
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Search" component={Search} />
          <Route path="/Career" component={Career} />
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
