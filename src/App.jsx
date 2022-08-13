import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./assets/styles/globalStyles.js";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import Feed from "./pages/Feed/index.jsx";

import SignIn from "./pages/SignIn/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/feed"
            element={
              <PrivateRoute>
                <Feed />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
