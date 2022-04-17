import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import classes from "./Text.module.css"
import Container from "../Container"

Text.propTypes = {
  element: PropTypes.oneOf([ 'div', 'p', 'span' ]),
  className: PropTypes.string,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool
}

Text.defaultProps = {
  element: 'p'
}

function Text({ element, children, className, disabled, italic, strong }) {
  return (
    React.createElement(
      element,
      {
        className: cn(className, 'root', {
          [ classes.disabled ]: disabled,
          [ classes.italic ]: italic,
          [ classes.strong ]: strong
        })
      },
      children
    )
  )
}

export default Text
