import React from "react"
import PropTypes from "prop-types"
import classes from "./Heading.module.scss"
import cn from "classnames"

Heading.propTypes = {
  level: PropTypes.oneOf([ 1, 2, 3, 4, 5 ]),
  children: PropTypes.node,
  className: PropTypes.string,
  black: PropTypes.bool,
  backLine: PropTypes.bool
}

Heading.defaultProps = {
  level: 1,
  black: false,
  backLine: false
}

function Heading({ level, black, backLine, children, className }) {
  return (
    React.createElement(
      `h${ level }`,
      {
        className: cn(
          className,
          classes[ `headingLevel${ level }` ],
          classes.root,
          {
            [ classes.isBlack ]: black,
            [ classes.isBackLine ]: backLine
          }
        )
      },
      children
    )
  )
}

export default Heading
