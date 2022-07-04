import classes from "./StarshipNames.module.css";

const StarshipNames = (props) => {
  /* const price = `$${props.price.toFixed(2)}`; */
  return (
    <li className={classes.starship}>
      <div>
        <button
          className={classes.starshipbutton}
          onClick={() => {
              console.log("this is from names")
            props.func(props.starship);
          }}
        >
          {props.starship.name}
            {console.log("this is from names")}
        </button>
        {/* <div className={classes.model}>{props.model}</div>
        <div className={classes.manufacturer}>{props.manufacturer}</div>
        <div className={classes.crew}>{props.crew}</div>
        <div className={classes.passengers}>{props.passengers}</div> */}
      </div>
      {/* <button>star  ships</button> */}
      {/* <div>
        <MovieItemForm />
      </div> */}
    </li>
  );
};

export default StarshipNames;
