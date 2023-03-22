import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Bot from "./pages/Bot";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/landing" element={<Landing setAuth={setAuth} />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route path="/bot" element={<Bot setAuth={setAuth} />} />
        <Route path="/" element={auth ? (<Landing setAuth={setAuth} />) : (<Navigate to="/landing" state={{ from: location }} replace />)} />
      </Routes>
    </>
  );
}

export default App;
