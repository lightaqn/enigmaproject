import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

import Post from "./pages/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
// import EmailLogin from "./pages/EmailLogin";
import Register from "./pages/Register";
import Legal from "./pages/Legal";
import Info from "./pages/Info";
import Mail from "./pages/Mail";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
// import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  // const emailuser = useSelector((state) => state.user.currentUser);
  // const emailuser = true;

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication failure!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <Router>
      <>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
          <Route
            path="/info"
            element={user ? <Info /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/mail"
            element={user ? <Mail /> : <Navigate to="/login" />}
          />
          {/* <Route
            path="/emaillogin"
            element={!emailuser || !user ? <EmailLogin /> : <Navigate to="/" />}
          />
          <Route
            path="/Legal"
            element={!emailuser ? <Legal /> : <Navigate to="/" />}
          /> */}
          {/* <Route
            path="/forgotpassword"
            element={!emailuser ? <ForgotPassword /> : <Navigate to="/" />}
          /> */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
