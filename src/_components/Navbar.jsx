import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav><ul>

            <li><Link to="/">All Books</Link></li>
            <li><Link to="favorites">Favorites</Link></li>
            <li><Link to="read">Read</Link></li>
            <li><Link to="profile">Profile</Link></li>

        </ul></nav>
    )
}

export default Navbar