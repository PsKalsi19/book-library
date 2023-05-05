import { Link } from "react-router-dom"
import "../styles/Navbar.css"
import { useContext } from "react"
import { BooksContext } from "../context/BooksProvider"
const Navbar = () => {
    const {booksHook:[books,]}=useContext(BooksContext)
    let favoriteCount=0
    if( books && books.length>0){
        favoriteCount= books.reduce((acc,{isFavorite})=>isFavorite?acc+1:acc,0)
    }
    return (
        <nav><ul>

            <li><Link to="/">All Books</Link></li>
            <li><Link to="favorites">Favorites {favoriteCount}</Link></li>
            <li><Link to="read">Read</Link></li>
            <li><Link to="profile">Profile</Link></li>

        </ul></nav>
    )
}

export default Navbar