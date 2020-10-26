import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RandomJokes from './RandomJokes';
import Favourites from "./Favourites";

function App() {
	const [viewFavourites, setViewFavourites] = useState(false);

	function showFavourite(){
		setViewFavourites(!viewFavourites)
	}

	return (
		<div className="container-fluid">
			<header className="App-header">
				<div className="blockquote text-center">Chuck Norris Jokes</div>
				<div className="blockquote text-center">
					<button className="btn btn-info" onClick={showFavourite}>{!viewFavourites ? 'Favourites' : 'Get Jokes'}</button>
					{!viewFavourites ? <RandomJokes ></RandomJokes>: <Favourites ></Favourites>}
			</div>
			</header>
		</div>
	);
}

export default App;
