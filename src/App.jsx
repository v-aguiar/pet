import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext.jsx";
import GlobalStyles from "./assets/styles/globalStyles.js";

function App() {
  const { userData, setUserData } = useState(JSON.parse(localStorage.getItem("userData")));

  const value = { userData, setUserData };

  <UserContext.Provider value={value}>
    <Router>
      <GlobalStyles />
      <Routes></Routes>
    </Router>
  </UserContext.Provider>;
}

export default App;
