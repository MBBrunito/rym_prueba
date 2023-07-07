import style from "./Card.module.css";

export default function Card(props,id,name,status,species) {
  return (
    <div className={style.cadaCarta}>
      <button className={style.botonCarta} onClick={()=>props.onClose(id)}>
        X
      </button>

      <h2>{props.name}</h2>
      <img className={style.imagen} src={props.image} alt="" />
      <div className={style.texto}> 
        <h2>{props.status.toUpperCase()}</h2>
        <h2>{props.species.toUpperCase()}</h2>
        <h2>{props.gender.toUpperCase()}</h2>
        <h2>{props.origin.toUpperCase()}</h2>
      </div>
    </div>
  );
}
