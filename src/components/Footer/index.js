import classes from "./Footer.module.css"
import Container from "../Container"

export default function Footer() {
  return (
    <footer className={ classes.root }>
      <Container>
        <div className={ classes.footerWrap }>
          Coded with
          <span className={ classes.heart }></span>
          by You
        </div>
      </Container>
    </footer>
  )
}
