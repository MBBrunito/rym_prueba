import Card from '../Card/Card';
import style from './Cards.module.css';


export default function Cards(props) {
   console.log(props)
   return (
   <div className={style.contenedor}> 
     {props.characters.map((character)=>{
      return(
      <Card className={style.cartita} 
      key={character.id} id={character.id}
      name={character.name} 
      status={character.status}
      species={character.species} 
      gender={character.gender}
      origin={character.origin.name} 
      image={character.image}
      onClose={()=>{}}
      />
      
      )
     })}

   </div>
   )
}
