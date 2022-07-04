import React from 'react';
import {useState, useEffect, useCallback} from 'react';
import './movieList.css'
import PropTypes from 'prop-types'

const links = {
    '0' : 'https://swapi.dev/api/films/4',
    '1' : 'https://swapi.dev/api/films/5',
    '2' : 'https://swapi.dev/api/films/6',
    '3' : 'https://swapi.dev/api/films/1',
    '4' : 'https://swapi.dev/api/films/2',
    '5' : 'https://swapi.dev/api/films/3',
}




export default function Movie(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
         links[props.volume]
      );
      const parsed = await response.json();
      setData(parsed);
    })();
  }, []);
  function myHandler(){
   props.hand(data.starships)
  }
    return (
      // <div>{data.title}</div>
    <tr><td>{data.title}</td><td>{data.episode_id}  </td>
    <td>{data.release_date}</td><td><a onClick={myHandler}>starships</a></td></tr>
   
     );
}

Movie.propTypes = {
  volume : PropTypes.string,
  hand : PropTypes.func
}