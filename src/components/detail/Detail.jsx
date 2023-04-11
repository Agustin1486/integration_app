import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css" 

export function Detail(props){

const navigate = useNavigate()
    

const {detailId} = useParams()
const [character, setCharacter] = useState({})

useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        data.name ? setCharacter(data) : alert("No hay personaje con ese ID") 
         })
         .catch((err)=>{
            console.log(err)
            alert("Ups! Algo Fallo!")
         })

      },[detailId])
    return (
      
        <div className={styles.container}> 
              
            <button className={styles.prueba} onClick={()=>navigate(-1)}>Regresar</button>
            <div className={styles.containerInfo}>
            <div>
            <img className={styles.imagen} src={character.image} alt=""/>
            <h1>Name: {character.name}</h1> 
            <h1>Status: {character.status}</h1>
            <h1>Gender: {character.gender}</h1>
            <h1>Specie: {character.species}</h1>
            <h1>Origin: {character.origin?.name}</h1>
            <h1>Location: {character.location?.name}</h1>
            </div>
            
            </div>
        </div>
    )
}

export default Detail;