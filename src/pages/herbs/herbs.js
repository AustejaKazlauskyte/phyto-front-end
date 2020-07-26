import React, { useState } from 'react'
import axios from 'axios'

import BackButton from 'components/BackButton/BackButton'

import HerbTable from '../../tables/HerbTable'
import AddHerbForm from '../../forms/AddHerbForm'
import EditHerbForm from '../../forms/EditHerbForm'
import ExtendedHerbTable from '../../tables/ExtendedHerbTable'

const Herbs = () => {
  const BASE_URL = 'http://localhost:8080/api/herbs'

  const [herbs, setHerbs] = React.useState([])

  React.useEffect(() => {
    axios
      .get(BASE_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        if (result.status === 200) {
          setHerbs(result.data)
        }
      })
  }, [])

  const addHerb = (herb) => {
    setHerbs([...herbs, herb])
  }

  const deleteHerb = (id) => {
    axios
      .delete(`http://localhost:8080/api/herbs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        if (result.status === 200) {
          /* setHerbs(result.data); */
          setHerbs(herbs.filter((herb) => herb.id !== id))
        }
      })
  }

  const [editing, setEditing] = useState(false)

  const initialHerb = { id: null, name: '' }

  const [currentHerb, setCurrentHerb] = useState(initialHerb)

  const editHerb = (herb) => {
    setEditing(true)
    setCurrentHerb(herb)
  }

  const updateHerb = (newHerb) => {
    setHerbs(herbs.map((herb) => (herb.id === currentHerb.id ? newHerb : herb)))
  }

  const [viewAll, setViewAll] = useState(false)

  const viewExtendedHerbs = () => {
    /* setViewAll(true); */
    setViewAll(!viewAll)
  }

  return (
    <div className="container">
      {viewAll ? (
        <div>
          <h2>Išplėstinis vaistažolių sąrašas</h2>
          <BackButton to="/login" text="Atgal" />
          <ExtendedHerbTable
            herbs={herbs}
            viewAll={viewAll}
            setEditing={setEditing}
            updateHerb={updateHerb}
          />
        </div>
      ) : (
        <div className="row">
          <div className="row">
            <div className="five columns">
              {editing ? (
                <div>
                  <h2>Redaguoti vaistažolę</h2>
                  <EditHerbForm
                    currentHerb={currentHerb}
                    setEditing={setEditing}
                    updateHerb={updateHerb}
                  />
                </div>
              ) : (
                <div>
                  <h2>Pridėti vaistažolę</h2>
                  <AddHerbForm addHerb={addHerb} />
                </div>
              )}
            </div>
            <div className="seven columns">
              <h2>Peržiūrėti visas vaistažoles</h2>
              <HerbTable
                herbs={herbs}
                deleteHerb={deleteHerb}
                editHerb={editHerb}
                viewExtendedHerbs={viewExtendedHerbs}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Herbs

// grizti prie session storage, atsijungti mygtuko ar daro full page reload, prevent deafult jeigu taip yra, jegu jis padeda i s tokena nuli
