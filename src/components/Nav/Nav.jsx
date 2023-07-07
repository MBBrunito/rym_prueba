import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
   return (
      <div>
         <Link to="/about">
            <button>About</button>
         </Link>
         <Link to="/home">
            <button>Home</button>
         </Link>
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}

//onSearch={(characterID) => window.alert(characterID)}
