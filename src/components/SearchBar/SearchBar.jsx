import { useState } from "react";
import styles from "./searchBar.module.css"
export default function SearchBar(props) {
   
   const [character, setCharacter] = useState("")
   const handleInputChange = (event) =>{
      const{value} = event.target
      setCharacter(value)
   }
   return (
      <div className={styles.container}>
         <input className= {styles.input} type='search' onChange={handleInputChange}/>
      
         {<button onClick={()=>props.onSearch(character)}>Agregar</button> }
      </div>
   );
}
