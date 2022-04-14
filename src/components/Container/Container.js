import React from "react"
import classes from "./Container.module.css"
import cn from "classnames"

function Container({ className, children }) {
  return (
    <div className={ cn(classes.root, className) }>{ children }</div>
  )
}

export default Container
