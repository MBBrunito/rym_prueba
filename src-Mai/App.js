import './App.css';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import Cards from './components/Cards/Cards';
import axios from 'axios';

function App() {
   function onSearch(dato){
      if (dato==="")return window.alert("NO estas poniendo nada Cabeza de Termo!!")
      if(characters.find(characters=>Number(dato)===characters.id))return window.alert("ya esta repetido TUKI")
      axios(`https://rickandmortyapi.com/api/character/${dato}`).then(
         (respuesta)=>{

            if (respuesta){
               setCharacters((oldChars)=>[...oldChars,respuesta.data]);
            }
         })
      .catch((err)=>window.alert("no hay personajes con ese id"));
   }
   function onClose(id){
      console.log(id)
      let arrayFiltrado=characters.filter(pj=> pj.id !== id) //pasar id a numero
      setCharacters(arrayFiltrado);
      console.log(arrayFiltrado)
   }
   const [characters,setCharacters]= useState([]);
   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Nav onSearch={onSearch}/>
          <Cards characters={characters} onclose={onClose}/>    
         
      </div>
   );
}

export default App;
