import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
} 

export default App;
