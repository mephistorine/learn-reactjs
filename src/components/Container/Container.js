import React from "react"
import classes from "./Container.module.scss"
import cn from "classnames"
import PropTypes from "prop-types"

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

function Container({ className, children }) {
  return (
    <div className={ cn(classes.root, className) }>{ children }</div>
  )
}

export default Container
