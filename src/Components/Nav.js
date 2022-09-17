import '../App.css';
import logo from "../Images/icon.svg"

export default function Navbar(){
    return (
    <nav className="navBar">
        <img className="myImg" alt="lol" src={logo}/>
    </nav>
    )
}