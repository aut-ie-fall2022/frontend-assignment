import React, { useEffect, useState } from "react";
import Stat1 from "./components/stat1";
import Stat2 from "./components/stat2";
import Stat3 from "./components/stat3";

function App() {
  const [mode, setmode] = useState({
    stat: 0,
    selectedmovie: [],
    allmovies: [],
    selectedship: [],
    ship: [],
    page: 0,
    loading: false,
  });
  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((res) =>
        setmode({
          stat: 0,
          selectedmovie: [],
          allmovies: res.results,
          selectedship: [],
          ship: [],
          page: 0,
        })
      );
  }, []);

  useEffect(() => {
    if (mode.loading === true) {
      let ships = [];
      mode.selectedmovie.starships.map(async (url) => {
        let fe = await fetch(url);
        let jso = await fe.json();
        ships.push(jso);
      });
      setmode({ ...mode, selectedship: ships, stat: 1, loading: false });
    }
  }, [mode]);

  let setname = (e) => {
    setmode({ ...mode, stat: 2, ship: e });
  };

  let setgg = (e) => {
    setmode({
      ...mode,
      stat: 0,
      selectedmovie: e,
      selectedship: [],
      ship: [],
      loading: true,
    });
  };
  let pageup = () => {
    let pages = mode.page;
    let dat = mode.selectedship.slice(pages * 10, pages * 10 + 10);
    if (dat.length === 10) {
      setmode({
        ...mode,
        page: pages + 1,
      });
    }
  };
  let pagedown = () => {
    let pages = mode.page;
    if (pages !== 0) {
      setmode({
        ...mode,
        page: pages - 1,
      });
    }
  };
  console.log(mode);
  if (mode.stat === 0) return <Stat1 mode={mode} func={setgg} />;
  if (mode.loading === true) return <div></div>;
  if (mode.stat === 1 && mode.loading === false)
    return (
      <Stat2
        mode={mode}
        setname={setname}
        setmode={setmode}
        pageup={pageup}
        pagedown={pagedown}
      />
    );
  if (mode.stat === 2)
    return (
      <Stat3
        mode={mode}
        setname={setname}
        setmode={setmode}
        pageup={pageup}
        pagedown={pagedown}
      />
    );
}

export default App;
