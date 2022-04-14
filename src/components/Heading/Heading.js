import React from "react"
import PropTypes from "prop-types"
import classes from "./Heading.module.css"
import cn from "classnames"
import Container from "../Container"

Heading.propTypes = {
  level: PropTypes.oneOf([ 1, 2, 3, 4, 5 ]).isRequired
}

function Heading({ level, children }) {
  return (
    React.createElement(
      `h${ level }`,
      { className: cn(classes[ `headingLevel${ level }` ], "root") },
      <Container className={ classes.container }>
        { children }
      </Container>
    )
  )
}

export default Heading
