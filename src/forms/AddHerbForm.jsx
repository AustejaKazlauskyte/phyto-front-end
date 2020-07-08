import React, {useState} from 'react';

const AddHerbForm = (props) => {

    const initHerb = {
        id: null,
        name: '',
        characteristics: {id: null, title: '', hasHighBloodPressure: '', child:'', pregnant: ''},
        medicalConditions: {id: null, title: ''}
    };

    const [herb, setHerb] = useState(initHerb);

    const handleChange = e => {
        const {name, value} = e.target;
        setHerb({...herb, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (herb.name) props.addHerb(herb);
    }

    return (
        <form>
            <label>Vaistažolės pavadinimas</label>
            <input className="u-full-width" type="text" name="name" value={herb.name} onChange={handleChange}/>
            <label>Charakteristikos</label>
            <input className="u-full-width" type="text" name="characteristics" value={herb.characteristics.title}/>
            <label>Ar tinka turinčiam aukštą spaudimą?</label>
            <input className="u-full-width" type="checkbox" name="hasHighBloodPressure" value={herb.characteristics.hasHighBloodPressure}/>
            <label>Ar tinka vaikams?</label>
            <input className="u-full-width" type="checkbox" name="child" value={herb.characteristics.child}/>
            <label>Ar tinka neščiosioms?</label>
            <input className="u-full-width" type="checkbox" name="pregnant" value={herb.characteristics.pregnant}/>
            <label>Negalavimai</label>
            <input className="u-full-width" type="text" name="medicalConditions" value={herb.medicalConditions.title}/>
            <button className="button-primary" type="submit" onClick={handleSubmit}>Pridėti vaistažolę</button>
        </form>
    )
}

export default AddHerbForm;
