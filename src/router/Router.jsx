import { Practice } from "../Practice";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./page2Routes";
import { Page404 } from "../Page404";
import { Atom } from "../Atom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templetes/DefaultLayout";
import { HeaderOnlyLayout } from "../components/templetes/HeaderOnlyLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
        <Route path="/Top">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/Users">
          <HeaderOnlyLayout>
            <Users />
          </HeaderOnlyLayout>
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {page1Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <DefaultLayout>{route.children}</DefaultLayout>
                </Route>
              ))}
            </Switch>
          )}
        ></Route>
        <Route
          path="/page2"
          render={({ match: { url } }) => (
            <Switch>
              {page2Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <DefaultLayout>{route.children}</DefaultLayout>
                </Route>
              ))}
            </Switch>
          )}
        ></Route>
        <Route path="/Practice">
          <DefaultLayout>
            <Practice />
          </DefaultLayout>
        </Route>
        <Route path="/Atom">
          <DefaultLayout>
            <Atom />
          </DefaultLayout>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
