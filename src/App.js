import "./App.module.scss"
import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Biography from "./pages/Biography"
import Layout from "./components/Layout/Layout"
import Contacts from "./pages/Contacts"
import About from "./pages/About/About"
import Characters from "./pages/Characters/Characters"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<About />} />
        <Route path="characters" element={ <Characters /> } />
        <Route path="characters/:id" element={ <Biography /> } />
      </Route>
    </Routes>
  )
}

export default App;
