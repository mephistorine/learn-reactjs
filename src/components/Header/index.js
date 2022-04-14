import classes from "./Header.module.css"
import Container from "../Container"

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

export default function Header() {
  return (
    <header className={ classes.root }>
      <div className={ classes.header }>
        <Container>
          <div className={ classes.logo }></div>
          <ul className={ classes.nav }>
            { MENU.map((item) => <li><a href="#">{ item }</a></li>) }
          </ul>
        </Container>
      </div>
    </header>
  )
}
