import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Locations from "./components/Locations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/">
            <Home message="Welcome to GhibliApp" />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
