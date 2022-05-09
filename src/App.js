import "./App.module.scss"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Main from "./pages/Main"
import Biography from "./pages/Biography"
import Layout from "./components/Layout/Layout"
import Contacts from "./pages/Contacts"
import About from "./pages/About/About"
import Characters from "./pages/Characters/Characters"
import NotFoundPage from "./pages/NotFoundPage"
import { useEffect } from "react"

function App() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      el.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [ location.pathname, location.hash ])
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<About />} />
        <Route path="characters" element={ <Characters /> } />
        <Route path="characters/:id" element={ <Biography /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Route>
    </Routes>
  )
}

export default App;
