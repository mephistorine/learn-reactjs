import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import classes from "./Text.module.css"
import Container from "../Container"

Text.propTypes = {
  element: PropTypes.oneOf([ 'div', 'p', 'span' ]).isRequired,
  className: PropTypes.string,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool
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
      <Container className={ classes.container }>
        {children}
      </Container>
    )
  )
}

export default Text
