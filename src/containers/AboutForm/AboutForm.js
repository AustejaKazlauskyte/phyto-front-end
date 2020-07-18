import React from 'react';
import { OutputText } from 'components/OutputText';

const title = 'Apie Phyto';

const text = `Phyto yra didžiausia Lietuvoje vaistažolių duomenų bazė, turinti 
              per 2000 vaistažolių. Jeigu skaitote šį tekstą, duomenų bazė šiuo 
              metu yra privati. Jeigu norite, kad praneštume, kada duomenų bazė 
              taps atvira, prenumeruokite naujienlaiškį`;

export default () => (
    <OutputText
        title={title}
        text={text}
    />
);