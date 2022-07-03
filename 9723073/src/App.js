// import "./App.css";
import Movielist from "./components/Movielist/Movielist";
import Starships from "./components/Starships/Starships";
import React, {useState} from "react";

function App() {


    const [selectedMovie, setSelectedMovie] = useState(null);
    const [starshipUrls, setStarshipUrls] = useState([]);
    const [count, setCount] = useState(0);

    function setCountState(number) {
        setCount(number);
    }

    if (count === 0)
        return (
            <main>
                <Movielist func={setCountState} setSelectedMovie={setSelectedMovie} setStarshipUrls={setStarshipUrls}/>
            </main>
        );
    else if (count === 1)
        return (
            <main>
                <Starships func={setCountState} starshipOfAMovie={selectedMovie} starshipUrls={starshipUrls}/>
            </main>
        );
}

export default App;
