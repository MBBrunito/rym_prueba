import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = "mb@dev.com";
   const PASSWORD = "mb";
   const navigate = useNavigate();

   const { pathname } = useLocation();

   useEffect(() => {
      !access && navigate("/");
   }, [access]);

   function onSearch(id) {
      if (characters.find((character) => character.id === Number(id))) {
         return window.alert(`El personaje ${id} ya está en pantalla`);
      }

      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         })
         .catch((error) => {
            window.alert("¡No hay personajes con este ID!");
         });
   }

   const onClose = (id) => {
      // setCharacters(characters.filter((val) => val.id !== Number(id)));
      let arrayFiltered = characters.filter((character) => character.id !== id);
      setCharacters(arrayFiltered);
   };

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate("/home");
      }
   };
   const logout = (userData) => {
      setAccess(false);
      navigate("/");
   };

   return (
      <div className="App">
         {pathname !== "/" && <Nav onSearch={onSearch} />}
         <hr />
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route
               path="/home"
               element={<Cards onClose={onClose} characters={characters} />}
            />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
