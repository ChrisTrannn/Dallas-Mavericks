import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Teams from "../teams/Teams";
import Players from "../players/Players";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;