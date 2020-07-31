import React, { useEffect, useState } from 'react'

import useApi from 'utils/api2'

import HerbForm from './HerbForm'
import HerbShortList from './HerbShortList'

const initialHerb = {
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

const HerbFormAndList = () => {
  const [herb, setHerb] = useState(initialHerb)
  const [herbs, setHerbs] = useState([])

  const [{ get, del }] = useApi()

  useEffect(() => {
    get('/herbs').then(setHerbs)
  }, [])

  const addHerb = (savedHerb) => {
    if (herbs.findIndex((h) => h.id === savedHerb.id) < 0) {
      setHerbs([...herbs, savedHerb])
    } else {
      setHerbs(herbs.map((h) => (h.id === savedHerb.id ? savedHerb : h)))
    }
    setHerb(initialHerb)
  }

  const remove = (id) =>
    del(`/herbs/${id}`).then(() => setHerbs(herbs.filter((h) => h.id !== id)))

  return (
    <>
      <HerbForm initHerb={herb} addHerb={addHerb} />
      <HerbShortList herbs={herbs} edit={setHerb} remove={remove} />
    </>
  )
}

export default HerbFormAndList
