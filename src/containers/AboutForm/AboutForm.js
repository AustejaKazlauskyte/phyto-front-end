import React from 'react'

import { ContentFrame, Paragraph, Title } from 'components'

const title = 'Apie Phyto'

const text = `Phyto yra didžiausia Lietuvoje vaistažolių duomenų bazė, turinti
              per 2000 vaistažolių. Jeigu skaitote šį tekstą, duomenų bazė šiuo
              metu yra privati.`

const AboutForm = () => (
  <ContentFrame>
    <Title>{title}</Title>
    <Paragraph>{text}</Paragraph>
  </ContentFrame>
)

export default AboutForm
