/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
export const BooksContext = createContext()
const BooksProvider = ({ children }) => {
    const booksHook = useState();
    const userHook = useState();
    const [books, setBooks] = booksHook
    const setFavorite = id => {
        setBooks(books.map(book => book.id === Number(id) ? { ...book, isFavorite: true } : book))
    }
    const markRead = id => {
        setBooks(books.map(book => book.id === Number(id) ? { ...book, isRead: true } : book))
    }

    return (
        <BooksContext.Provider value={{ booksHook, userHook, setFavorite, markRead }}>
            {children}
        </BooksContext.Provider>
    )
}

export default BooksProvider;