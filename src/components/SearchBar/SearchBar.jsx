import estilo from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   const idRandom = () => {
      const valor = Math.floor(Math.random() * 826);
      props.onSearch(valor);
   };

   return (
      <div className={estilo.barra}>
         <div className={estilo.searchy}>
            <input value={id} onChange={handleChange} type="search" />
            <button
               onClick={() => {
                  props.onSearch(id);
               }}
            >
               <button value={id} onClick={idRandom}>
                  ­§
               </button>
               Agregar
            </button>
         </div>
      </div>
   );
}
