import { useContext } from "react"
import { BooksContext } from "../context/BooksProvider"
import BookCard from "./BookCard"

const Favorites = () => {
    const { booksHook: [books,] } = useContext(BooksContext)

    return (
        <section className="row">

            {
                books && books.filter(book => book.isFavorite).map(book => <BookCard key={book.id} book={book} />)
            }
        </section>
    )
}

export default Favorites