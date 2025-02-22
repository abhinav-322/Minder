import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";
import AboutUs from "./pages/AboutUs";
import Download from "./pages/Download";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TnC from "./pages/TnC";
import CreateProfile from "./pages/CreateProfile";
import ProfileState from "./context/profiles/ProfileState";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <>
      <ProfileState>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/ForgotPass" element={<ForgotPass />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Download" element={<Download />} />
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/TnC" element={<TnC />} />
          <Route exact path="/CreateProfile" element={<CreateProfile />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </Router>
      </ProfileState>
    </>
  );
}

export default App;
