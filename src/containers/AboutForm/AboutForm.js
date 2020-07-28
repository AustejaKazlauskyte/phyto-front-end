import React from 'react'

import Paragraph from 'components/Paragraph/Paragraph'
import Title from 'components/Title/Title'

const title = 'Apie Phyto'

const text = `Phyto yra didžiausia Lietuvoje vaistažolių duomenų bazė, turinti
              per 2000 vaistažolių. Jeigu skaitote šį tekstą, duomenų bazė šiuo
              metu yra privati.`

const AboutForm = () => (
  <>
    <Title>{title}</Title>
    <Paragraph>{text}</Paragraph>
  </>
)

export default AboutForm
