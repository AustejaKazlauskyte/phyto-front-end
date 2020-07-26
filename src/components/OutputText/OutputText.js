import React from 'react'
import PropTypes from 'prop-types'

const OutputText = ({ title, text }) => (
  <div className="container">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

OutputText.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default OutputText
