import React, { useState, useEffect } from 'react';
import StarshipInfo from '../starShipInfo/starshipInfo';
import Names from '../getNames/names';
import './starships.css';
import PropTypes from 'prop-types';


export default function Starships(props) {

    
    const [detail, setDetail] = useState("");
    const [show, setShow] = useState(0);

    function detailHandler(x){
        setDetail(x)
        setShow(a => new Number(a+1))
        
    }
    function prevHandler(){
        props.backHandler()
        setShow(0)
    }
    function nextHandler(){
        props.nxtHandler()
        setShow(0)
    }
    
    var rows = [];
    for (var i = 0; i < props.vol.length; i++) {
       
        rows.push(<Names url_={props.vol[i]} key={props.vol[i]} clickHandler={detailHandler}></Names>);
    } 
    if(show == 0)
    {
          
        return ( 
            
            <div><h1 id="head2">STARSHIPS</h1><table id="listing_page">
                <tbody>
                    {
                    rows   
                    }
            </tbody>
            </table>
            <span id="page">{props.pageNum}</span>
            <div id="pagination"><a id="btn_prev" className="btn" onClick={prevHandler}>&laquo;</a>
            <a id="go_back" className="btn" onClick={props.hand}>GO BACK</a>
            <a id="btn_next" className="btn" onClick={nextHandler}>&raquo;</a></div></div>
            
        );}
    if(show != 0)
    {  
        return ( 
                
                <div id={detail}><h1 id="head2">STARSHIPS</h1><table id="listing_page">
                    <tbody>
                        {
                        rows   
                        }
                </tbody>
                </table>
                <span id="page">{props.pageNum}</span>
                <div id="pagination"><a id="btn_prev" className="btn" onClick={prevHandler}>&laquo;</a>
                <a id="go_back" className="btn" onClick={props.hand}>GO BACK</a>
                <a id="btn_next" className="btn" onClick={nextHandler}>&raquo;</a></div>
                <div id="details">{<StarshipInfo url_={detail}></StarshipInfo>}</div></div>
                
            );}
}


Starships.propTypes = {
 hand : PropTypes.func,
 vol : PropTypes.array,
 backHandler : PropTypes.func,
 nxtHandler : PropTypes.func,
 pageNum : PropTypes.number
}