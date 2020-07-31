import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button/Button'
import Checkbox from 'components/Checkbox/Checkbox'
import Input from 'components/Input/Input'
import api from 'utils/api'

const HerbForm = ({ initHerb, addHerb }) => {
  const [herb, setHerb] = useState(initHerb)

  useEffect(() => {
    setHerb(initHerb)
  }, [initHerb])

  const handleChange = ({ target: { name, value, type, checked } }) => {
    const newHerb = { ...herb }
    const val = type === 'checkbox' ? checked : value
    if (name.indexOf('.') > -1) {
      const items = name.split('.')
      herb[items[0]][0][items[1]] = val
    } else {
      newHerb[name] = val
    }
    setHerb(newHerb)
  }

  const submitForm = (e) => {
    e.preventDefault()

    api.post('/herbs', herb).then((result) => addHerb(result))
  }

  return (
    <form onSubmit={submitForm}>
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

HerbForm.propTypes = {
  initHerb: PropTypes.object.isRequired,
  addHerb: PropTypes.func.isRequired,
}

export default HerbForm
