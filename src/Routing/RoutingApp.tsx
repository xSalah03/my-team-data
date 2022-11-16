import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Arbitre from "../components/arbitre/Arbitre";
import Club from "../components/club/Club";
import Competition from "../components/competition/Competition";
import Match from "../components/match/Match";
import MatchTab from "../components/match/MatchTab";
import Player from "../components/player/Player";
import Saison from "../components/saison/Saison";
import Stade from "../components/stade/Stade";
import MainLayout from "../layout/MainLayout";

type Props = {};

const RoutingApp = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="equipes" element={<Club />} />
        <Route path="joueurs" element={<Player />} />
        <Route path="matchs" element={<Outlet />} >
          <Route path="list" element={<Match />} />
          <Route path="one/:id" element={<MatchTab />} />
        </Route>
        <Route path="competitions" element={<Competition />} />
        <Route path="arbitres" element={<Arbitre />} />
        <Route path="stades" element={<Stade />} />
        <Route path="saison" element={<Saison />} />
        <Route index element={<Club />} />
      </Route>
    </Routes>
  );
};

export default RoutingApp;
