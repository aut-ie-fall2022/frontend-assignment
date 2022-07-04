import bg from "./assets/background.jpg"
import styled from "styled-components"
import {useEffect, useState} from "react";
import {Attr, Button, Key, MovieItem, Value} from "./components/MovieItem";

function App() {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(undefined)
    const [selectedStarshipIndex, setSelectedStarshipIndex] = useState(undefined)
    const [cachedShips, setCachedShips] = useState({})
    useEffect(() => {
        fetch("https://swapi.py4e.com/api/films", {
            method: "get"
        }).then((res) => res.json())
            .then(body => setMovies(body.results))
    }, [])

    useEffect(() => {
        if (selectedMovie) {
            let ships = selectedMovie.starships || []
            for (let url of ships) {
                if (!ships[url]) {
                    fetch(url, {
                        method: "get"
                    }).then((res) => res.json())
                        .then(body => setCachedShips(prev => ({
                            ...prev,
                            [url]: body
                        })))
                }
            }
        }
    }, [selectedMovie])

    return (
        <Container bg={bg}>
            <Glass>
                {
                    (!selectedMovie) ? <MovieList>
                            {
                                movies.map((item) => <MovieItem Data={item} key={item.episode_id}
                                                                Select={(id) => setSelectedMovie(movies.find(item => item.episode_id === id))}/>)
                            }
                        </MovieList> :
                        <>
                            <Starships>
                                <ol>
                                    {selectedMovie.starships.map((item, index) => {
                                        let data = cachedShips[item]
                                        if (!data) {
                                            return <></>
                                        }
                                        console.log(data)
                                        return <li key={index}
                                                   className={index === selectedStarshipIndex ? "selected" : ""}
                                                   onClick={() => {
                                                       if (index === selectedStarshipIndex) {
                                                           setSelectedStarshipIndex(undefined)
                                                       } else {
                                                           setSelectedStarshipIndex(index)
                                                       }
                                                   }}>
                                            {data.name}
                                        </li>
                                    })}
                                </ol>
                                {selectedStarshipIndex !== undefined && selectedMovie.starships[selectedStarshipIndex] ?
                                    <Details>
                                        {Object.entries(cachedShips[selectedMovie.starships[selectedStarshipIndex]]).map(
                                            ([key, value]) => <Attr>
                                                <Key>{key}</Key>
                                                <Value>{value}</Value>
                                            </Attr>
                                        )}
                                    </Details> : <></>}
                            </Starships>
                            <Nav>
                                <Button onClick={()=>{
                                    setSelectedMovie(undefined)
                                    setSelectedStarshipIndex(undefined)
                                }}>
                                    Back
                                </Button>
                            </Nav>
                        </>
                }
            </Glass>
        </Container>
    );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${props => props.bg}");
  background-size: cover;
`

const Glass = styled.span`
  /* From https://css.glass */
  background: rgba(125, 188, 255, 0.31);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
`

const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px;
  max-height: 70vh;
  overflow-x: hidden;
  overflow-y: scroll;
`

const Starships = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px;
  max-height: 70vh;
  overflow-x: hidden;
  overflow-y: scroll;

  & ol {
    width: 500px;
  }

  & ol li {
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  & ol li:hover {
    color: #f93a13;
  }

  & ol li.selected {
    color: #f95c13;
  }

`

const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`


const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default App;
