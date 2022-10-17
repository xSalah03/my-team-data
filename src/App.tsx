import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux-store/hooks";
import { getAllPlayerRequestAction } from "./redux-store/reducer/PlayerSlice";
import RoutingApp from "./Routing/RoutingApp";

function App() {
  const players = useAppSelector((state) => state.allPlayers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPlayerRequestAction());
  }, []);

  return <RoutingApp />;
}

export default App;
