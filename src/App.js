import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home'
import NotFound from './pages/errors/notFound'
import Login from "./pages/login";
import Logout from "./pages/login/logout";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
