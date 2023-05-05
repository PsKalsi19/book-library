import { useContext } from "react"
import { BooksContext } from "../context/BooksProvider"

const Profile = () => {
    const { userHook: [user,] } = useContext(BooksContext)
    const { name, bio, img } = user
    return (
        <main>
            <div className="card">
                <h3>Profile</h3>
                <img src={img} height="400" width='350' alt={name} />
                <p><strong>Name: {name}</strong></p>
                <p> <strong>Bio:</strong> {bio}</p>
            </div>
        </main>
    )
}

export default Profile