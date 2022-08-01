import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Places.css"


function Place({place,id,available}){

    let seats="place available"; 
   
    if(available===false){ 
        seats="place unavailable"         
    }if(available===true){
        seats="place available"
    }

    function Avaliar(){
    if(available===false){ 
        alert("Esse assento não está disponível");         
    }if(available==true){
        alert("ok")
    }
    }

    return(<div className={seats} onClick={Avaliar}>{place}</div>);

 
}








export default function Places({name,setName,cpf,setCpf}){
    const params=useParams();
    const [places,setPlaces]=React.useState([]);
   

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.IdTime}/seats`);
        promise.then((response)=>{console.log(response.data.seats);setPlaces(response.data.seats)});
        },[]);


    function handleForm(e){
        e.preventDefault();
    }

    
    return(
    <div className="allPlaces">
        <div className="watch"><h2>Selecione o(s) assento(s)</h2></div>
        <div className="places">

        {places.map((iten)=>(<div><Place key={iten.id} id={iten.id} place={iten.name} available={iten.isAvailable}/></div>))}

            <div className="marking">
                <div className="boxMarking"><div className="selected"></div>Seleciondo</div>
                <div className="boxMarking"><div className="available"></div>Disponível</div>
                <div className="boxMarking"><div className="unavailable"></div>Indisponível</div>
            </div>
        </div>
        <form onSubmit={handleForm} className="dataInput">
            <h3>Nome do comprador:</h3>
            <input type="text" required className="nameInput" placeholder="Digite seu nome..." onChange={(e)=>(setName(e.target.value))}></input>

            <h3>CPF do comprador:</h3>
            <input type="text" required className="cpfInput" placeholder="Digite seu CPF..." onChange={(e)=>(setCpf(e.target.value))}></input>
            <button className="reserveButton" type="submit"> Reservar assento(s)</button>
        </form>

    </div>);
}