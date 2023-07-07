function validation(form, errors, setErrors) {
   const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/;
   const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
   const sizeEmail = 35;

   if (!form.password) {
      if (!form.email) {
         setErrors({
            ...errors,
            email: "El email no puede estar vacío",
         });
      } else if (!emailRegex.test(form.email)) {
         setErrors({
            ...errors,
            email: "El formato del email es incorrecto",
         });
      } else if (form.email.length > sizeEmail) {
         setErrors({
            ...errors,
            email: "El largo del email no puede superar los 35 caracteres",
         });
      } else
         setErrors({
            ...errors,
            email: "",
         });
   } else {
      if (form.password.length < 6 || form.password.length > 10) {
         setErrors({
            ...errors,
            password:
               "La contraseñe debe tener entre 6 y 10 caractres de longitud",
         });
      } else if (!passRegex.test(form.password)) {
         setErrors({
            ...errors,
            password:
               "La contraseña debe tener al menos un número y una letra Mayúscula",
         });
      } else
         setErrors({
            ...errors,
            password: "",
         });
   }
   return { ...form };
}

export default validation;
