import React , { useState } from 'react';

import './App.css';
import Movie from './components/movieList/movieList';
import Starships from './components/starships/starShips.js';
import Pagination from './components/pagination/pagination'





function App() {
  
  const arrState = useState([]);
  const [page, setPage] = useState(0);
  const [vol , volState] = useState(-1);

  // function goBack(){
  //   console.log('handle 1')
  //   setCount((count)=>{count=1})
  //   console.log(count)
  // };
  function ssHandler(func, ){

  }
  const hnd = (x) => {
    volState(x)
    setPage(page + 1)
  }

  const mainPage = <div><h1 id="head1">MOVIES</h1><table id="movies" >
    <tbody>
      <Movie volume={'0'} hand={hnd}></Movie>
      <Movie volume={'1'} hand={hnd}></Movie>
      <Movie volume={'2'} hand={hnd}></Movie>
      <Movie volume={'3'} hand={hnd}></Movie>
      <Movie volume={'4'} hand={hnd}></Movie>
      <Movie volume={'5'} hand={hnd}></Movie>
      </tbody>
    </table></div>


if (page === 0 ){
  console.log('in first :', vol)
return (
  <div className='App'>
      {mainPage}
  </div>
 );
};

if (page === 1 ){
  console.log('in second :', vol)
  return (
    <div className='App'>
      {/* <Starships hand={() => setPage(page - 1)} vol={vol}/> */}
  
          <Pagination
            data={vol}
            RenderComponent={Starships}
            handler={() => setPage(page - 1)}
            dataLimit={2}
          />
        
      
    </div>
  );
};
  

  
  
};

export default App;










// import React, { useState } from 'react';
// import Movie from './components/movieList/movieList.js'
// import Starships from './components/cc/starShips.js';
// // import './Form.css';
// function App() {
// const [page, setPage] = useState(0);
// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [password, setPassword] = useState('');
// const [email, setEmail] = useState('');

// if (page === 0 ){
// return (
//   <div>
//     <p>{page}</p>
//       <Movie volume={0} hand={() => setPage(page + 1)}></Movie>

//       <button onClick={() => setPage(page + 1)}>
//        Click me
//       </button>
//   </div>
//  );
// };

// if (page === 1 ){
//   return (
//     <div>
//       <p>{page}</p>
//       <Starships hand={() => setPage(page - 1)}/>
//       <button onClick={() => setPage(page - 1)}>
//            Click me
//          </button>
//     </div>
//   );
// };

// if (page === 2) {
//   return(
//     <div>
//     <h1> hello </h1>
//     </div>
//   );
// };

// };
// export default App
