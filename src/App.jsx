
import './App.css'
import { Routes, Route } from 'react-router-dom'
import  Home  from './_components/Home'
import  Navbar  from './_components/Navbar'
import  Profile  from './_components/Profile'
import  Favorites  from './_components/Favorites'
import  Read  from './_components/Read'
function App() {

  return (
    <>
      <h1>Books Library</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='profile' element={<Profile />} />
        <Route path='read' element={<Read />} />
      </Routes>
    </>
  )
}

export default App
