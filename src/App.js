import React from "react";
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
import SwipeButtons from "./SwipeButtons.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
