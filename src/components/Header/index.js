import classes from "./Header.module.scss"
import Container from "../Container"

import logoPng from "../../assets/logo.png"
import cn from "classnames"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

const MENU = [
  {
    label: "Main",
    to: "/"
  },
  {
    label: "Characters",
    to: "/characters"
  },
  {
    label: "About",
    to: "/about"
  },
  {
    label: "Contacts",
    to: "/contacts"
  }
];

export default function Header() {
  const [ isTightHeader, setIsTightHeader ] = useState(false)
  
  useEffect(() => {
    const handleWindowScroll = () => setIsTightHeader(window.scrollY > 60)
    
    window.addEventListener("scroll", handleWindowScroll)

    return () => {
      window.removeEventListener("scroll", handleWindowScroll)
    }
  }, [])
  
  return (
    <header className={ classes.root }>
      <div className={ cn(classes.header, { [ classes.small ]: isTightHeader }) }>
        <Container className={classes.headerWrap}>
          <div className={ classes.logo }>
            <Link to="/"><img src={ logoPng } alt="Logo" /></Link>
          </div>
          <ul className={ classes.nav }>
            {
              MENU.map((item, index) =>
                <li key={ index }>
                  <NavLink to={ item.to }
                           className={({ isActive }) => isActive ? classes.active : ''}>{ item.label }</NavLink>
                </li>)
            }
          </ul>
        </Container>
      </div>
    </header>
  )
}
