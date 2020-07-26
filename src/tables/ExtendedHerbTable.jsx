import React from 'react'
import PropTypes from 'prop-types'

const ExtendedHerbTable = ({ herbs }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Pavadinimas</th>
        <th>Characteristikos</th>
        <th>Ar tinka turinčiam aukštą spaudimą?</th>
        <th>Ar tinka vaikams?</th>
        <th>Ar tinka nėščiosioms?</th>
        <th>Negalavimai</th>
      </tr>
    </thead>
    <tbody>
      {herbs.length > 0 ? (
        herbs.map((herb) => {
          const { id, name, characteristics, medicalConditions } = herb
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{characteristics[0].title}</td>
              <td>{characteristics[0].hasHighBloodPressure ? 'TAIP' : 'NE'}</td>
              <td>{characteristics[0].child ? 'TAIP' : 'NE'}</td>
              <td>{characteristics[0].pregnant ? 'TAIP' : 'NE'}</td>
              <td>{medicalConditions[0].title}</td>
            </tr>
          )
        })
      ) : (
        <tr>
          <td colSpan={7}>Vaistažolių sąrašas tuščias</td>
        </tr>
      )}
    </tbody>
  </table>
)

ExtendedHerbTable.propTypes = {
  herbs: PropTypes.array.isRequired,
}

export default ExtendedHerbTable
