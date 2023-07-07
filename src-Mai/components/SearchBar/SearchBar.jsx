import styles from './SearchBar.module.css';
import { useState } from 'react';
export default function SearchBar({onSearch}) {
   let [Id, setId] = useState('');
   const handleChange= (event)=>{
      console.log(setId)
      setId([         
         event.target.value       
      ])
   }
   return (
      <div className={styles.buscador}>
         <input value={Id} handleChange={handleChange} className={styles.espacio} type='search' />
         <button className={styles.boton} onClick={()=>onSearch(Id)}>Agregar</button> 
      </div>
   );
}
