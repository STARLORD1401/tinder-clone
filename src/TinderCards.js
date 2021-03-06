import React, { useState } from "react";
import "./TinderCards.css";
import ElizabethOlsen from "./assets/images/elizabeth-olsen.jpeg";
import ScarlettJohannson from "./assets/images/scarlett-johansson.jpeg";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elizabeth Olsen",
      url: ElizabethOlsen,
    },
    {
      name: "Scarlett Johannson",
      url: ScarlettJohannson,
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
