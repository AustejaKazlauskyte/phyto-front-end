import React from 'react'
import PropTypes from 'prop-types'

const IndividualHerb = ({ herbs }) =>
  herbs.length > 0 ? (
    herbs.map((herb) => {
      const { id, name, characteristics } = herb
      return (
        <div>
          <button type="button">Suskleisti</button>
          <div>
            <h1>
              {id}. {name}
            </h1>
          </div>
          <div>
            <h2>Charakteristikos</h2>
            <p>{characteristics}</p>
          </div>
          <div>
            <h3>Papildomi vartojimo apribojimai:</h3>
            <p>{characteristics.hasHighBloodPressure}</p>
            <p>{characteristics.child}</p>
            <p>{characteristics.pregnant}</p>
          </div>
        </div>
      )
    })
  ) : (
    <tr>
      <td colSpan={8}>Vaistažolių sąrašas tuščias</td>
    </tr>
  )

IndividualHerb.propTypes = {
  herbs: PropTypes.array.isRequired,
}

export default IndividualHerb
