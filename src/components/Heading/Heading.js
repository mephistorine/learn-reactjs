import React from "react"
import PropTypes from "prop-types"
import classes from "./Heading.module.css"
import cn from "classnames"

Heading.propTypes = {
  level: PropTypes.oneOf([ 1, 2, 3, 4, 5 ]),
  children: PropTypes.node,
  className: PropTypes.string,
  black: PropTypes.bool
}

Heading.defaultProps = {
  level: 1,
  black: false
}

function Heading({ level, black, children }) {
  return (
    React.createElement(
      `h${ level }`,
      {
        className: cn(
          classes[ `headingLevel${ level }` ],
          classes.root,
          {
            [ classes.isBlack ]: black
          }
        )
      },
      children
    )
  )
}

export default Heading
