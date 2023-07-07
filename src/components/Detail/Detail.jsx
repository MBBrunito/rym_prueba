import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

export default function Detail(props) {
   let { id } = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
      console.log(character);
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert("No hay personajes con ese ID");
            }
         }
      );
      return setCharacter({});
   }, [id]);

   return character ? (
      <div className={style.contenedor}>
         <h2 className={style.titulo}>Details of the selected character...</h2>
         <div className={style.detail}>
            <div className={style.name}>
               <h2>{character.name}</h2>
               <img
                  className={style.image}
                  src={character.image}
                  alt={character.name}
               />
            </div>
            <div className={style.detalle}>
               <h3>
                  <span className={style.key}>Id: </span>
                  {character.id}
               </h3>
               <h3>
                  <span className={style.key}>Estado: </span>
                  {character.status}
               </h3>
               <h3>
                  <span className={style.key}>Especie: </span>
                  {character.species}
               </h3>
               <h3>
                  <span className={style.key}>Género:</span>
                  {character.gender}
               </h3>
               <h3>
                  <span className={style.key}>Orígen: </span>
                  {character.origin?.name}
               </h3>
            </div>
         </div>
      </div>
   ) : (
      ""
   );
}
