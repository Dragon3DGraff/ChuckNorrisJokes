import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import favouriteJokes from "./favouriteJokes";
import "./Joke.css";

function Joke({ joke, updateState, number }) {
  const [isFavourite, setIsFavourite] = useState(favouriteJokes.has(joke));

  function addToFavourite() {
    if (!isFavourite) {
      favouriteJokes.add(joke);
    } else {
      favouriteJokes.remove(joke);
    }
    if (updateState) updateState();
    setIsFavourite(!isFavourite);
  }
  return (
    <div className="joke">
      {/* <div className='container'> */}
      <div className="joke-content">
        <div>
          {/* <img src={joke.icon_url} alt=""></img> */}
          {number ? number + ". " : ""}
          {joke ? joke["value"] : ""}
        </div>
        <div onClick={addToFavourite} className="star-div">
          {!isFavourite ? (
            <span className="star">&#9734;</span>
          ) : (
            <span className="star">&#9733;</span>
          )}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Joke;
