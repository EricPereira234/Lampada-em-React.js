import React,{useState} from "react";
import Acesa from '../img/Acesa.png';
import Apagada from '../img/apaga.png';
import Des from '../img/lampaAp.png';
import Lig from '../img/ligada.png';

export default function Lamp(props){
    return(

    <>
        <div className='area'>
            <img width='200px' src={props.liga? Acesa:Des}/>
        </div>
        <div className='area'>
            <img width='50px' onClick={()=>props.Setliga(!props.liga)} 
            src={props.liga? Lig:Apagada}/>
        </div>
        
    </>

    );
}