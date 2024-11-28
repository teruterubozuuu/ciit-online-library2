import './App.css'
import Navbar from './component/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Header from './component/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Catalog1 from './pages/Catalog1'

function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/catalog1" element={<Catalog1/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
