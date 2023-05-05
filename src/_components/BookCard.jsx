import { useContext } from "react"
import { BooksContext } from "../context/BooksProvider"
import { useLocation, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookCard = ({ book }) => {
    const {id,title,author,image,isFavorite,isRead}=book
    const {setFavorite,markRead}=useContext(BooksContext);
   const location= useLocation()
   const navigate= useNavigate()
    return (
        <div className="col" key={id}>
            <header
                className="img-container">
                <img src={image}
                    height='300px'
                    width='200px'
                    alt={title} />
            </header>
            <main>
                <h4><strong><em>#{id}</em></strong></h4>
                <h3 className="card-heading"><strong>{title}</strong></h3>
                <p>Author: {author}</p>
            </main>
           { location.pathname==='/' && <footer className="button-footer">
                <button disabled={isRead} onClick={()=>markRead(id)}>Mark as Read</button>
               {!isFavorite && <button onClick={()=>setFavorite(id)}>Add to Fav</button>}
               {isFavorite && <button onClick={()=>navigate("/favorites")}>Go to Fav</button>}
            </footer>}
        </div>
    )
}

export default BookCard