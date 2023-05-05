import { useContext, useEffect } from "react"
import { fakeFetch } from "../db/data"
import { BooksContext } from "../context/BooksProvider"
import BookCard from "./BookCard"
const Home = () => {
    const { booksHook, userHook } = useContext(BooksContext);
    const [books, setBooks] = booksHook;
    // eslint-disable-next-line no-unused-vars
    const [_, setUser] = userHook
    useEffect(() => {
        const getData = async () => {
            const promisedData = await fakeFetch('https://example.com/api/books')
            const data = await promisedData;
            setBooks(data.data.books);
            setUser(data.data.user)
        }
        if (!books)
            getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
            <section className="row">
                {
                    books && books.map(book => <BookCard key={book.id} book={book}/>
                    )
                }
            </section>
    )
}

export default Home