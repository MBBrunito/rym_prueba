import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css';


const Nav = ({onSearch})=>{
    return(
    <div className={style.nav}>
       <SearchBar onSearch={onSearch} />
    </div>
    )
}
export default Nav;