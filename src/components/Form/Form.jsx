import React from "react";
import { useState } from "react";
import validation from "./validation";

export default function Form(props) {
   const [userData, setUserData] = useState({
      email: "",
      password: "",
   });

   const [errors, setErrors] = useState({});

   const handleChange = (event) => {
      setUserData({
         ...userData,
         [event.target.name]: event.target.value,
      });

      validation(
         {
            ...userData,
            [event.target.name]: event.target.value,
         },
         errors,
         setErrors
      );
   };

   const handelSubmit = (event) => {
      event.preventDefault();
      props.login(userData)
   };

   return (
      <div>
         <form >
            <label htmlFor="email">Email: </label>
            <input
               value={userData.email}
               onChange={handleChange}
               type="text"
               name="email"
            />
            <label htmlFor="password">Password: </label>
            <input
               value={userData.password}
               onChange={handleChange}
               type="text"
               name="password"
            />
            <button onClick={handelSubmit} >Submit</button>
         </form>
      </div>
   );
}
