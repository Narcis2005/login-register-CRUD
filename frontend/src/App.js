
import React from "react";
import Login from "./routes/login";
import Register from "./routes/register";
import Profile from "./routes/profile"
import ChangePassword from "./routes/profile/changePassword"
import DeleteAccount from "./routes/profile/deleteAccount"

import {Route, Switch} from "react-router-dom";
import Home from "./routes/home"
const App = () => {
  return (
    <div className="App">
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/change-password" component={ChangePassword} />
          <Route exact path="/delete-account" component={DeleteAccount} />
        </Switch>
        
    </div>
  );
}

export default App;
