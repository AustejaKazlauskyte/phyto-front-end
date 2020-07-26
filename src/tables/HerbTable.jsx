import React from 'react'
import PropTypes from 'prop-types'

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
                <button onClick={() => viewExtendedHerbs(herb)}>
                  <i className="far fa-eye" />
                </button>
                <button onClick={() => editHerb(id, herb)}>
                  <i className="far fa-edit" />
                </button>
                <button onClick={() => deleteHerb(id)}>
                  <i className=" fas fa-trash" />
                </button>
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
