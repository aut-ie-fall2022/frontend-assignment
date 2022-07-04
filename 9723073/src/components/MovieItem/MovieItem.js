import classes from "./MovieItem.module.css";

const MovieItem = (props) => {
  /* const price = `$${props.price.toFixed(2)}`; */
  return (
    <li className={classes.movie}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.episode_id}>{props.episode_id}</div>
        <div className={classes.release_date}>{props.release_date}</div>
      </div>
      <button
        onClick={() => {
          props.func(1);
          props.SetWhichMovie(props.title)
        }}
      >
        starships
      </button>
      {/* <div>
        <MovieItemForm />
      </div> */}
    </li>
  );
};

export default MovieItem;
