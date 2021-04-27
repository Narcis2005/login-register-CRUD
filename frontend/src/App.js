
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import Login from "./routes/login";
import Register from "./routes/register";
import Logout from "./routes/logout"
import Profile from "./routes/profile"

import {Route, Switch} from "react-router-dom";
import Home from "./routes/home"
function App() {
  return (
    <div className="App">
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
        
    </div>
  );
}

export default App;
