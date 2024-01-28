import "../css/NavBar.css"
import { Link } from "react-router-dom";
const NavBar = () => {
    return(
        <ol>
            <li><Link to={"Home/"}>Home</Link></li>
            <li><Link to={"About/"}>About</Link></li>
            <li><Link to={"Login/"}>Login In</Link></li>
            <li><Link to={"Reference/"}>Reference</Link></li>
            <li><Link to={"Memo/"}>Memo</Link></li>
            <li><Link to={"SignUp/"}>SignUp</Link></li>
            <li><Link to={"Callback/"}>Callback</Link></li>
        </ol>
    )
}
export default NavBar;