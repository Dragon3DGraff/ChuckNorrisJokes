import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Favourites.css";
import favouriteJokes from "./favouriteJokes";
import Joke from "./Joke";

export default function Favourites() {
  const [cleared, setCleared] = useState(favouriteJokes.array.length === 0);
  const [arrUpdated, setArrUpdated] = useState(true);

  function updateState() {
    if (favouriteJokes.array.length === 0) setCleared(true);
    setArrUpdated(!arrUpdated);
  }

  function clearFavourites() {
    favouriteJokes.clear();
    setCleared(true);
  }

  return (
    <div className="blockquote text-center">
      Your favourite jokes
      <div className="favourite-jokes">
        {favouriteJokes.array.map((item, index) => (
          <Joke
            key={item.id}
            joke={item}
            updateState={updateState}
            number={index + 1}
          ></Joke>
        ))}
      </div>
      <div className="clear-favourites">
        {!cleared ? (
          <button className="btn btn-danger" onClick={clearFavourites}>
            Clear Favourites
          </button>
        ) : (
          <span className="no-favorite">No Favourite Jokes</span>
        )}
      </div>
    </div>
  );
}
