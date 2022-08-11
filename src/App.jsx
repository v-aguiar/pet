import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext.jsx";
import GlobalStyles from "./assets/styles/globalStyles.js";

import SignIn from "./pages/SignIn/index.jsx";

function App() {
  const { userData, setUserData } = useState(JSON.parse(localStorage.getItem("userData")));
  const value = { userData, setUserData };

  return (
    <UserContext.Provider value={value}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
