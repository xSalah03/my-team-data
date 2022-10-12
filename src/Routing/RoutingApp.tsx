import React from "react";
import { Route, Routes } from "react-router-dom";
import Club from "../components/club/Club";
import Player from "../components/player/Player";
import MainLayout from "../layout/MainLayout";

type Props = {};

const RoutingApp = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="equipes" element={<Club />} />
        <Route path="joueurs" element={<Player />} />
        <Route index element={<Club />} />
      </Route>
    </Routes>
  );
};

export default RoutingApp;
