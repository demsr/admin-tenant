import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { IndexPage, UserPage } from "./pages";
import { Navbar } from "./components";

function App() {
  const history = useHistory();

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/create">
            <IndexPage />
          </Route>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
