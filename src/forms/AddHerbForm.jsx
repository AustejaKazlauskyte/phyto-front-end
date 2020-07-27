import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Button from 'components/Button/Button'
import Checkbox from 'components/Checkbox/Checkbox'
import Input from 'components/Input/Input'

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
    <form onSubmit={postData}>
      <Input
        id="title"
        label="Vaistažolės pavadinimas"
        name="name"
        onChange={handleChange}
        value={herb.name}
        placeholder="Pvz.: Dilgėlė"
      />
      <Input
        id="characteristics"
        label="Charakteristikos"
        name="characteristics.title"
        onChange={handleChange}
        value={herb.characteristics[0].title}
        type="email"
      />
      <Checkbox
        id="high-blood-pressure"
        label="Ar tinka turinčiam aukštą spaudimą?"
        name="characteristics.hasHighBloodPressure"
        onChange={handleChange}
        checked={herb.characteristics[0].hasHighBloodPressure}
      />
      <Checkbox
        id="characteristics-child"
        label="Ar tinka vaikams?"
        name="characteristics.child"
        onChange={handleChange}
        checked={herb.characteristics[0].child}
      />
      <Checkbox
        id="characteristics-pregnant"
        label="Ar tinka nėščiosioms?"
        name="characteristics.pregnant"
        onChange={handleChange}
        checked={herb.characteristics[0].pregnant}
      />
      <Input
        id="conditions-title"
        label="Negalavimai"
        name="medicalConditions.title"
        onChange={handleChange}
        value={herb.medicalConditions[0].title}
        type="email"
      />
      <Button primary type="submit">
        Pridėti vaistažolę
      </Button>
    </form>
  )
}

AddHerbForm.propTypes = {
  addHerb: PropTypes.func.isRequired,
}

export default AddHerbForm
