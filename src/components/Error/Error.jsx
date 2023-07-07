import style from './Error.module.css'

export default function Error(props) {
   return (
         <div className={style.divGeneral}>
            <div className={style.container}>
               <div className={style.canvas}>
                  <div className={style.tracker + " " + style["tr-1"]}></div>
                  <div className={style.tracker + " " + style["tr-2"]}></div>
                  <div className={style.tracker + " " + style["tr-3"]}></div>
                  <div className={style.tracker + " " + style["tr-4"]}></div>
                  <div className={style.tracker + " " + style["tr-5"]}></div>
                  <div className={style.tracker + " " + style["tr-6"]}></div>
                  <div className={style.tracker + " " + style["tr-7"]}></div>
                  <div className={style.tracker + " " + style["tr-8"]}></div>
                  <div className={style.tracker + " " + style["tr-9"]}></div>
                  <div className={style.tracker + " " + style["tr-10"]}></div>
                  <div className={style.tracker + " " + style["tr-11"]}></div>
                  <div className={style.tracker + " " + style["tr-12"]}></div>
                  <div className={style.tracker + " " + style["tr-13"]}></div>
                  <div className={style.tracker + " " + style["tr-14"]}></div>
                  <div className={style.tracker + " " + style["tr-15"]}></div>
                  <div className={style.tracker + " " + style["tr-16"]}></div>
                  <div className={style.tracker + " " + style["tr-17"]}></div>
                  <div className={style.tracker + " " + style["tr-18"]}></div>
                  <div className={style.tracker + " " + style["tr-19"]}></div>
                  <div className={style.tracker + " " + style["tr-20"]}></div>
                  <div className={style.tracker + " " + style["tr-21"]}></div>
                  <div className={style.tracker + " " + style["tr-22"]}></div>
                  <div className={style.tracker + " " + style["tr-23"]}></div>
                  <div className={style.tracker + " " + style["tr-24"]}></div>
                  <div className={style.tracker + " " + style["tr-25"]}></div>
                  <div id={style.card}>
                     <p id={style.prompt}>Error 404</p>
                     <div className={style.title}>
                        Qué intentas hacer?
                        <br />
                     </div>
                     <div className={style.subtitle}>Andá pa'llá BOBO!!</div>
                  </div>
               </div>
            </div>
         </div>
   );
}