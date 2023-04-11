import styles from "./card.module.css"
import { Link } from "react-router-dom"
import { addFavorite, deleteFavorite } from "../reducer/actions";
import { connect } from "react-redux"
import { useState } from "react";

function Card({ id, name, species, gender, image, onClose }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         deleteFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({ id, name, species, gender, image, onClose });
      }
   }

   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={onClose} className={styles.closeButton}>
              X <i className="fa fa-times"></i>
            </button>
         </div>

         <Link to={`/detail/${id}`} className={styles.link}>
            <div className={styles.img}>
               <img src={image} alt={name} />
            </div>
         </Link>

         <h2 className={styles.name}>{name}</h2>
         <h2 className={styles.species}>{species}</h2>
         <h2 className={styles.gender}>{gender}</h2>

         <div className={styles.buttonContainer}>
            <button onClick={handleFavorite} className={styles.favButton}>
               {isFav ? "❤️" : "🤍"}
            </button>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   }
}

export default connect(null, mapDispatchToProps)(Card)