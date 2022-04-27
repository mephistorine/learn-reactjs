import classes from "./Header.module.scss"
import Container from "../Container"

import logoPng from "../../assets/logo.png"
import cn from "classnames"

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

export default function Header() {
  return (
    <header className={ classes.root }>
      <div className={ classes.header }>
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
