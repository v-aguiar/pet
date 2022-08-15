import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext.jsx";
import { NavigationProvider } from "./contexts/NavigationContext.jsx";

import PrivateRoute from "./components/PrivateRoute.jsx";

import Feed from "./pages/Feed/index.jsx";
import SignIn from "./pages/SignIn/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import PetPage from "./pages/PetPage/index.jsx";

import GlobalStyles from "./assets/styles/globalStyles.js";

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyles />
        <NavigationProvider>
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
            <Route
              path="/pet"
              element={
                <PrivateRoute>
                  <PetPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </NavigationProvider>
      </Router>
    </UserProvider>
  );
}

export default App;
