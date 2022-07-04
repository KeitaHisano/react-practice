import { Practice } from "./Practice";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>Routing Practice</p>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
        <br />
        <Link to="/Practice">Practice</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={() => (
            <Switch>
              <Route exact path="/page1">
                <Page1 />
              </Route>
              <Route path="/page1/detailA">
                <Page1DetailA />
              </Route>
              <Route path="/page1/detailB">
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        ></Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/Practice">
          <Practice />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
