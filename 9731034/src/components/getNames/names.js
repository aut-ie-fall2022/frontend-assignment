import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types'

export default function Names({url_, clickHandler}){
    const [info, setInfo] = useState({});

    useEffect(() => {
        (async () => {
        const response = await fetch(
            url_
        );
        const parsed = await response.json();
        setInfo(parsed);
        })();
    }, []);
    
    function whenClicked(){
        clickHandler(new String(url_))
        console.log("url_", url_)
    }
    return(
        <>
            <tr key={info.name}><td onClick={whenClicked}>{info.name}</td></tr>
        </>
    )
}


Names.propTypes ={
    url_ : PropTypes.string,
    clickHandler : PropTypes.func
}