import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export default function StarshipInfo({url_}){
    const [info, setInfo] = useState({});

    useEffect(() => {
        (async () => {
        const response = await fetch(
            url_
        );
        const parsed = await response.json();
        setInfo(parsed);
        })();
    }, [url_]);

    return(
        <>

            <table key={info.name}><tbody><tr key="model"><td>{info.model}</td></tr><tr key="manufacturer"><td>{info.manufacturer}</td></tr>
            <tr key="crew"><td>{info.crew}</td></tr><tr key="passsengers"><td>{info.passengers}</td></tr></tbody></table>
        </>
    )
}

StarshipInfo.propTypes ={
    url_ : PropTypes.string
}