import classes from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={ classes.root }>
      <div className={ classes.container }>
        <div className={ classes.footerWrap }>
          Coded with
          <span className={ classes.heart }></span>
          by You
        </div>
      </div>
    </footer>
  )
}
