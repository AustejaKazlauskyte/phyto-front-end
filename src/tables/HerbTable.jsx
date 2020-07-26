import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'components/IconButton/IconButton'

const HerbTable = ({ deleteHerb, editHerb, herbs, viewExtendedHerbs }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Pavadinimas</th>
        <th>Veiksmai</th>
      </tr>
    </thead>
    <tbody>
      {herbs.length > 0 ? (
        herbs.map((herb) => {
          const { id, name } = herb
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <IconButton
                  icon="far fa-eye"
                  onClick={viewExtendedHerbs}
                  val={herb}
                />
                <IconButton icon="far fa-edit" onClick={editHerb} val={herb} />
                <IconButton icon="fas fa-trash" onClick={deleteHerb} val={id} />
              </td>
            </tr>
          )
        })
      ) : (
        <tr>
          <td colSpan="3">Vaistažolių sąrašas tuščias</td>
        </tr>
      )}
    </tbody>
  </table>
)

HerbTable.propTypes = {
  deleteHerb: PropTypes.func.isRequired,
  editHerb: PropTypes.func.isRequired,
  herbs: PropTypes.array.isRequired,
  viewExtendedHerbs: PropTypes.func.isRequired,
}

export default HerbTable
