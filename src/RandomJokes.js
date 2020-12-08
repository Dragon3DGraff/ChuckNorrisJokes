import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RandomJokes.css";
import Joke from "./Joke";

function RandomJokes() {
  const [joke, setJoke] = useState("");
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let interval;
    if (timer) {
      getJoke();
      interval = setInterval(getJoke, 3000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJoke(data);
      })
      .catch((err) => console.error(err));
  }

  function initTimer() {
    setTimer(!timer);
  }

  return (
    <div className="random-jokes">
      <div className="random-jokes-buttons">
        <button className="btn btn-primary" onClick={getJoke}>
          Get joke
        </button>
        <button
          className={!timer ? "btn btn-primary" : "btn btn-warning"}
          onClick={initTimer}
        >
          {!timer ? "Auto" : "Stop"}
        </button>
      </div>
      {joke ? <Joke key={joke.id} joke={joke}></Joke> : ""}
    </div>
  );
}

export default RandomJokes;
