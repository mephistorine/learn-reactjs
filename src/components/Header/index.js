import classes from "./Header.module.scss"
import Container from "../Container"

import logoPng from "../../assets/logo.png"
import cn from "classnames"
import { useEffect, useState } from "react"

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

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
            <img src={ logoPng } alt="Logo" />
          </div>
          <ul className={ classes.nav }>
            { MENU.map((item) => <li><a href="#">{ item }</a></li>) }
          </ul>
        </Container>
      </div>
    </header>
  )
}
