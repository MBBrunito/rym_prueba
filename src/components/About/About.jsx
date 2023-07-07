/* eslint-disable react/jsx-no-target-blank */
import style from "./About.module.css";
import code from "../../images/giphy.gif";
import dont from "../../images/dont-touch.gif";
import { useState } from "react";

export default function About(props) {
   return (
      <div>
         <h2 className={style.title}>Rick & Morty project</h2>
         <div className={style.imgs} >
            <img
               className={style.dont}
               src={dont}
               alt="código"
               title="Don't touch me!!"
            />
            <img
               className={style.code}
               src={code}
               alt="código"
               title="Don't touch me!!"
            />
            
         </div>
         <br />
         <a
            className={style.title2}
            href="https://www.linkedin.com/in/mbbrunito/"
            target="_Blank"
         >
            by MBBrunito
         </a>
      </div>
   );
}
