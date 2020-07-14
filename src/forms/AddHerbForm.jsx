import React, {useState} from 'react';

const AddHerbForm = (props) => {

    const initHerb = {
        id: null,
        name: '',
        characteristics: {id: null, title: '', hasHighBloodPressure: false, child: false, pregnant: false},
        medicalConditions: {id: null, title: ''}
    };

    const [herb, setHerb] = useState(initHerb);

/*

    const handleChange = ({target: {name, value}}) => {
        setHerb({...herb, [name]: value});
    }

    const handleChangeCheckbox = ({target: {name, checked}}) => {
        setHerb({...herb, [name]: checked});
    }
*/
     const handleChange = ({target: {name, value, type, checked}}) => setHerb(prevState => ({
         ...prevState, [name]: (type === 'checkbox' ? checked : value)
     }));

    const handleSubmit = e => {
        e.preventDefault();
        if (herb.name) props.addHerb(herb);
    }

    return (
        <form>
            <label>Vaistažolės pavadinimas</label>
            <input className="u-full-width" type="text" name="name" value={herb.name} onChange={handleChange}/>
            <label>Charakteristikos</label>
            <input className="u-full-width" type="text" name="characteristics"
                   value={herb.characteristics.title}
                   onChange={handleChange}/>
            <label>Ar tinka turinčiam aukštą spaudimą?</label>
            <input className="u-full-width" type="checkbox" name="hasHighBloodPressure"
                   checked={herb.characteristics.hasHighBloodPressure} onChange={handleChange}/>
            <label>Ar tinka vaikams?</label>
            <input className="u-full-width" type="checkbox" name="child"
                   checked={herb.characteristics.child}
                   onChange={handleChange}/>
            <label>Ar tinka neščiosioms?</label>
            <input className="u-full-width" type="checkbox" name="pregnant"
                   checked={herb.characteristics.pregnant} onChange={handleChange}/>
            <label>Negalavimai</label>
            <input className="u-full-width" type="text" name="medicalConditions"
                   value={herb.medicalConditions.title}
                   onChange={handleChange}/>
            <button className="button-primary" type="submit" onClick={handleSubmit}>Pridėti vaistažolę</button>
        </form>
    )
}
// kodel veikia checkboxas su value property, o ne su checked? ar del to kad funkcinis komponentas?

export default AddHerbForm;
