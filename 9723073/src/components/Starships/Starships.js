import React, {useEffect} from "react";
import classes from "./Starships.module.css";
import Card from "../Card/Card";
import StarshipNames from "../StarshipNames/StarshipNames";
import StarshipInfo from "../StarshipInfo/StarshipInfo";
import {useState} from "react";
//
// const starships = [
//     {
//         name: "StarShip #1",
//         model: "Model #1",
//         manufacturer: "Manufacturer #1",
//         crew: "Crew #1",
//         passengers: "Passengers #1",
//     },
//     {
//         name: "StarShip #2",
//         model: "Model #2",
//         manufacturer: "Manufacturer #2",
//         crew: "Crew #2",
//         passengers: "Passengers #2",
//     },
//     {
//         name: "StarShip #3",
//         model: "Model #3",
//         manufacturer: "Manufacturer #3",
//         crew: "Crew #3",
//         passengers: "Passengers #3",
//     },
//     {
//         name: "StarShip #4",
//         model: "Model #4",
//         manufacturer: "Manufacturer #4",
//         crew: "Crew #4",
//         passengers: "Passengers #4",
//     },
//     {
//         name: "StarShip #5",
//         model: "Model #5",
//         manufacturer: "Manufacturer #5",
//         crew: "Crew #5",
//         passengers: "Passengers #5",
//     },
//     {
//         name: "StarShip #6",
//         model: "Model #6",
//         manufacturer: "Manufacturer #6",
//         crew: "Crew #6",
//         passengers: "Passengers #6",
//     },
//     {
//         name: "StarShip #7",
//         model: "Model #7",
//         manufacturer: "Manufacturer #7",
//         crew: "Crew #7",
//         passengers: "Passengers #7",
//     },
// ];
// const starships = [];
const Starships = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        const fetchedData = [];
        const getData = async (url) => {
            const data = await fetch(url).then((v) =>
                v.json()
            );
            fetchedData.push(data);
        };
        const getStarShipsData = async () => {
            setIsLoading(true);
            for (const starShipUrl of props.starshipUrls) {
                console.log(starShipUrl);
                await getData(starShipUrl);
            }
            setIsLoading(false);
            setStarships(fetchedData);
        };
        getStarShipsData();
    }, []);

    const [starship, setStarship] = useState(null);

    function setStarshipState(st) {
        console.log("this is from starships")
        console.log(st)
        const selectedStarship = starships.find((s) => s?.name === st?.name);
        console.log(st)
        setStarship(selectedStarship);
        props.func(1);
        // selectedStarship = starships.name
    }

    const starshipNames = starships.map((starship) => (
        <StarshipNames starship={starship} func={setStarshipState}

        />
    ));
    const starshipInfo = (
        <StarshipInfo
            // key={starship.name}
            name={starship?.name}
            model={starship?.model}
            manufacturer={starship?.manufacturer}
            crew={starship?.crew}
            passengers={starship?.passengers}
            // selectedStarship={selectedStarship}
        />
    );

    return (
        <section className={classes.starships}>
            <h3>Movie Title</h3>
            <div className={classes.twoColumnContainer}>
                <div className={classes.starnames}>
                    <Card>
                        <ul>{starshipNames}</ul>
                        <button
                            onClick={() => {
                                props.func(0);
                            }}
                        >
                            back
                        </button>
                    </Card>
                </div>

                <div className={classes.starinfo}>{starshipInfo}</div>
            </div>
        </section>
    );
};

export default Starships;
