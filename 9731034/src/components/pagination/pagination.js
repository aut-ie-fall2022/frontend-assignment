import React , {useState} from 'react';
import PropTypes from 'prop-types'

export default function Pagination({ data, RenderComponent, dataLimit, handler }) {
  const pages = Math.ceil(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    if (currentPage < pages){
        setCurrentPage((page) => page + 1);}
  }

  function goToPreviousPage() {
    if (currentPage > 1){
        setCurrentPage((page) => page - 1);}
  }


  const getPaginatedData = () => {
            const startIndex = currentPage * dataLimit - dataLimit;
            const endIndex = startIndex + dataLimit;
            return data.slice(startIndex, endIndex);
  };
  console.log("paginated : ",getPaginatedData())
  var rows = [];
  

  return (
    <div>
    <div className="dataContainer">
      {
        <RenderComponent key={data} hand={handler} vol={getPaginatedData()} backHandler={goToPreviousPage} nxtHandler={goToNextPage} pageNum={currentPage} />
      }
    </div>

    
  </div>
  );
}


Pagination.propTypes = {
  data : PropTypes.array,
  RenderComponent : PropTypes.elementType,
  dataLimit : PropTypes.number,
  handler : PropTypes.func
}