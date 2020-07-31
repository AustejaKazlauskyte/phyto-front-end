import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'components/IconButton/IconButton'

const HerbShortList = ({ herbs, edit, remove }) => {
  const viewList = () => console.log('jeee')

  return (
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
                  <IconButton icon="far fa-eye" onClick={viewList} val={herb} />
                  <IconButton icon="far fa-edit" onClick={edit} val={herb} />
                  <IconButton icon="fas fa-trash" onClick={remove} val={id} />
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
}

HerbShortList.propTypes = {
  herbs: PropTypes.array.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}

export default HerbShortList
