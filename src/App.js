import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Davinci from "./components/text-davinci-003"
import { useTranslation } from "react-i18next";


function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Navbar />
      </div>
      <CssBaseline />
      <Routes>
        <Route path="/landing" element={<Landing setAuth={setAuth} />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route path="/bot" element={<Davinci setAuth={setAuth} />} />
        <Route path="/" element={<Landing setAuth={setAuth} />}/>
      </Routes>
    </>
  );
}

export default App;
