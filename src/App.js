import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Bot from "./pages/Bot";
import Davinci from "./components/text-davinci-003"

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

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
        <Route path="/bot" element={<Bot setAuth={setAuth} />} />
        <Route path="/" element={<Davinci setAuth={setAuth} />}/>
        <Route path="/test" element={auth ? (<Landing setAuth={setAuth} />) : (<Navigate to="/landing" state={{ from: location }} replace />)} />
      </Routes>
    </>
  );
}

export default App;
