import classes from "./Slider.module.css"

export default function Slider() {
  return (
    <section className={ classes.section }>
      <div className={ classes.slider }>
        <div className={ classes.container + ' ' + classes.sliderContent }>
          <h1 className={ classes.header }>Wow</h1>
          <h2 className={ classes.subheader }>Wow.Wow.Wow</h2>
          <div className={ classes.call }>
            <button className={ classes.button }>Wow</button>
          </div>
        </div>
      </div>
    </section>
  )
}
