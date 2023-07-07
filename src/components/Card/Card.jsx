import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   const [showInterno, setShowInterno] = React.useState(false);

   const truncatedName =
      props.name.length > 17 ? `${props.name.slice(0, 17)}...` : props.name;

   return (
      <div className={styles.cardsito}>
         <div
            className={styles.botones}
            onMouseEnter={() => setShowInterno(true)}
            onMouseLeave={() => setShowInterno(false)}
         >
            <Link to={`/detail/${props.id}`}>
               <button className={styles.h2} title={props.name}>
                  {props.id} {truncatedName}
               </button>
            </Link>
            <button
               className={styles.close}
               onClick={() => {
                  props.onClose(props.id);
               }}
               title={props.name}
            >
               X
            </button>
         </div>
         {showInterno && (
            <div className={styles.interno}>
               <img className={styles.img} src={props.image} alt="" />
               {/* <div className={styles.datos}>
                  <h3 className={styles.h3}>
                     <span>Estado: </span>
                     {props.status}
                  </h3>
                  <h3 className={styles.h3}>
                     <span>Especie: </span>
                     {props.species}
                  </h3>
                  <h3 className={styles.h3}>
                     <span>Género:</span>
                     {props.gender}
                  </h3>
                  <h3 className={styles.h3}>
                     <span>Orígen: </span>
                     {props.origin}
                  </h3>
               </div> */}
            </div>
         )}
      </div>
   );
}
