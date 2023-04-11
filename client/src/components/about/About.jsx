import React from "react"
import styles from "./About.module.css"

export default function about(props){
    return(
        <div className= {styles.container}>
            <h1>Bienvenido, Bienvenu, Willkommen, Bem-vindo, 受欢迎的, Benvenuto</h1>
            <p>En esta app encontraras toda la informacion sobre tus personajes favoritos de la magnifica serie Rick&Morty</p>
            <img src=  "rick_and_morty-app\src\components\pictures\Mrmixes.jpg" alt="Not Found"/>
            <h3>Hola, mi nombre es Agustin y soy creador de esta humilde app</h3>
            <h2>Linkedin: https://www.linkedin.com/in/agustintu%C3%B1ez/</h2>
            <h2>Instagram: Agustin Cartago</h2>
        </div>
    )
}