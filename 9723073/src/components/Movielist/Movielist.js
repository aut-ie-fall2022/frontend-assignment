import React, {useEffect, useState} from "react";
import MovieItem from "../MovieItem/MovieItem";
import classes from "./Movielist.module.css";
import Card from "../Card/Card";

const movies = [
    {
        title: "Movie #1",
        episode_id: 1,
        release_date: "1980-01-01",
    },
    {
        title: "Movie #2",
        episode_id: 2,
        release_date: "1980-01-01",
    },
    {
        title: "Movie #3",
        episode_id: 3,
        release_date: "1980-03-03",
    },
    {
        title: "Movie #4",
        episode_id: 4,
        release_date: "1980-04-04",
    },
    {
        title: "Movie #5",
        episode_id: 5,
        release_date: "1980-05-05",
    },
    {
        title: "Movie #6",
        episode_id: 6,
        release_date: "1980-06-06",
    },
];
const Movielist = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState([])

    // 3. Create out useEffect function
    useEffect(() => {
        fetch(`https://swapi.dev/api/films`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setMovieData(data?.results))
        setIsLoading(false);
    }, [])


    const movieList = movieData?.map((movie) => (
        <MovieItem
            key={movie?.title}
            title={movie?.title}
            episode_id={movie?.episode_id}
            release_date={movie?.release_date}
            func={props.func}
            SetWhichMovie={SetWhichMovie}
        />
    ));


    function SetWhichMovie(title) {
        // console.log("this is from starships")
        // console.log(st)

        const selectedMovie = movieData.find((m) => m?.title === title);
        const starshipUrls = selectedMovie.starships;        // console.log(st)
        props.setStarshipUrls(starshipUrls)
        props.setSelectedMovie(selectedMovie);
        props.func(1);

    }


    return (
        <section className={classes.movies}>
            <Card>
                {isLoading ? (<h2>waiting</h2>) : (
                    <ul>{movieList}</ul>
                )
                }
            </Card>
        </section>
    );
};

export default Movielist;
