import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
