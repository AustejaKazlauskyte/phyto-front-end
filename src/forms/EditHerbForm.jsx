import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button/Button'

const EditHerbForm = ({ currentHerb, setEditing, updateHerb }) => {
  const [herb, setHerb] = useState(currentHerb)

  const handleChange = ({ target: { name, value, type, checked } }) => {
    const newHerb = { ...herb }
    const val = type === 'checkbox' ? checked : value
    if (name.indexOf('.') > -1) {
      const items = name.split('.')
      herb[items[0]][items[1]] = val
    } else newHerb.name = val
    setHerb(newHerb)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (herb.name) updateHerb(herb)
  }

  const resetForm = () => setEditing(false)

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Vaistažolės pavadinimas</label>
      <input
        id="name"
        className="u-full-width"
        type="text"
        name="name"
        value={herb.name}
        onChange={handleChange}
      />
      <label htmlFor="herb-characteristics-title">Charakteristikos</label>
      <input
        id="herb-characteristics-title"
        className="u-full-width"
        type="text"
        name="characteristics.title"
        value={herb.characteristics.title}
        onChange={handleChange}
      />
      <label htmlFor="herb-has-high-blood-pressure">
        Ar tinka turinčiam aukštą spaudimą?
      </label>
      <input
        id="herb-has-high-blood-pressure"
        className="u-full-width"
        type="checkbox"
        name="characteristics.hasHighBloodPressure"
        checked={herb.characteristics.hasHighBloodPressure}
        onChange={handleChange}
      />
      <label htmlFor="herb-characteristics-child">Ar tinka vaikams?</label>
      <input
        id="herb-characteristics-child"
        className="u-full-width"
        type="checkbox"
        name="characteristics.child"
        checked={herb.characteristics.child}
        onChange={handleChange}
      />
      <label htmlFor="herb-characteristics-pregnant">
        Ar tinka neščiosioms?
      </label>
      <input
        id="herb-characteristics-pregnant"
        className="u-full-width"
        type="checkbox"
        name="characteristics.pregnant"
        checked={herb.characteristics.pregnant}
        onChange={handleChange}
      />
      <label htmlFor="herb-conditions-title">Negalavimai</label>
      <input
        id="herb-conditions-title"
        className="u-full-width"
        type="text"
        name="medicalConditions.title"
        value={herb.medicalConditions.title}
        onChange={handleChange}
      />

      <Button primary type="submit">
        Išsaugoti
      </Button>
      <Button type="reset" onClick={resetForm}>
        Atšaukti
      </Button>
    </form>
  )
}

EditHerbForm.propTypes = {
  currentHerb: PropTypes.object.isRequired,
  setEditing: PropTypes.func.isRequired,
  updateHerb: PropTypes.func.isRequired,
}

export default EditHerbForm
