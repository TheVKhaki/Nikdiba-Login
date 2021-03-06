import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
//Style Css
import "./styles/app.scss";
//Pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserPanel from "./pages/UserPanel";
//PageTransform
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  //Data for UserPanel
  const [panelData, setPanelData] = useState({
    email: "",
    name: "",
    mobile: "",
    id: 0,
    password: "12345678",
  });
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Login panelData={panelData} setPanelData={setPanelData} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/userpanel">
            <UserPanel panelData={panelData} setPanelData={setPanelData} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
