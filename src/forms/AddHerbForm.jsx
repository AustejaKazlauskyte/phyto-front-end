import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const AddHerbForm = ({ addHerb }) => {
  const initHerb = {
    id: null,
    name: '',
    characteristics: [
      {
        title: '',
        hasHighBloodPressure: false,
        child: false,
        pregnant: false,
      },
    ],
    medicalConditions: [
      {
        title: '',
      },
    ],
  }

  const [herb, setHerb] = useState(initHerb)

  /*
        const handleChange = ({target: {name, value}}) => {
            setHerb({...herb, [name]: value});
        }

        const handleChangeCheckbox = ({target: {name, checked}}) => {
            setHerb({...herb, [name]: checked});
        }
    */

  const handleChange = ({ target: { name, value, type, checked } }) => {
    const newHerb = { ...herb }
    const val = type === 'checkbox' ? checked : value
    if (name.indexOf('.') > -1) {
      const items = name.split('.')
      herb[items[0]][0][items[1]] = val
    } else {
      newHerb.name = val
    }
    setHerb(newHerb)
  }

  function postData(event) {
    event.preventDefault()
    axios
      .post('http://localhost:8080/api/herbs', herb, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        if (result.status === 200) {
          addHerb(result.data)
        }
      })
  }

  return (
    <form>
      <label htmlFor="title">Vaistažolės pavadinimas</label>
      <input
        id="title"
        className="u-full-width"
        type="text"
        name="name"
        value={herb.name}
        onChange={handleChange}
      />
      <label htmlFor="characteristics">Charakteristikos</label>
      <input
        id="characteristics"
        className="u-full-width"
        type="text"
        name="characteristics.title"
        value={herb.characteristics[0].title}
        onChange={handleChange}
      />
      <label htmlFor="high-blood-pressure">
        Ar tinka turinčiam aukštą spaudimą?
      </label>
      <input
        id="high-blooc-pressure"
        className="u-full-width"
        type="checkbox"
        name="characteristics.hasHighBloodPressure"
        checked={herb.characteristics[0].hasHighBloodPressure}
        onChange={handleChange}
      />
      <label htmlFor="characteristics-child">Ar tinka vaikams?</label>
      <input
        id="characteristics-child"
        className="u-full-width"
        type="checkbox"
        name="characteristics.child"
        checked={herb.characteristics[0].child}
        onChange={handleChange}
      />
      <label htmlFor="characteristics-pregnant">Ar tinka nėščiosioms?</label>
      <input
        id="characteristics-pregnant"
        className="u-full-width"
        type="checkbox"
        name="characteristics.pregnant"
        checked={herb.characteristics[0].pregnant}
        onChange={handleChange}
      />
      <label htmlFor="conditions-title">Negalavimai</label>
      <input
        id="conditions-title"
        className="u-full-width"
        type="text"
        name="medicalConditions.title"
        value={herb.medicalConditions[0].title}
        onChange={handleChange}
      />
      <button className="button-primary" type="submit" onClick={postData}>
        Pridėti vaistažolę
      </button>
    </form>
  )
}

AddHerbForm.propTypes = {
  addHerb: PropTypes.func.isRequired,
}

export default AddHerbForm
