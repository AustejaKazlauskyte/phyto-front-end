import React, {useState} from 'react';

const AddHerbForm = (props) => {

    const initHerb = {
        id: null,
        name: '',
        characteristics: {id: null, title: '', hasHighBloodPressure: true, child: false, pregnant: false},
        medicalConditions: {id: null, title: ''}
    };

    const [herb, setHerb] = useState(initHerb);

    const handleChange = e => {
        const {name, value, type, checked}  = e.target;
        setHerb({...herb, [name]: value});
    }

    /* handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }*/

    const handleSubmit = e => {
        e.preventDefault();
        if (herb.name) props.addHerb(herb);
    }

    return (
        <form>
            <label>Vaistažolės pavadinimas</label>
            <input className="u-full-width" type="text" name="name" value={herb.name} onChange={handleChange}/>
            <label>Charakteristikos</label>
            <input className="u-full-width" type="text" name="characteristics" value={herb.characteristics.title} onChange={handleChange}/>
            <label>Ar tinka turinčiam aukštą spaudimą?</label>
            <input className="u-full-width" type="checkbox" name="hasHighBloodPressure" checked={herb.characteristics.hasHighBloodPressure} onChange={handleChange}/>
            <label>Ar tinka vaikams?</label>
            <input className="u-full-width" type="checkbox" name="child" checked={herb.characteristics.child}/>
            <label>Ar tinka neščiosioms?</label>
            <input className="u-full-width" type="checkbox" name="pregnant" value={herb.characteristics.pregnant}/>
            <label>Negalavimai</label>
            <input className="u-full-width" type="text" name="medicalConditions" value={herb.medicalConditions.title}/>
            <button className="button-primary" type="submit" onClick={handleSubmit}>Pridėti vaistažolę</button>
        </form>
    )
}
// kodel veikia checkboxas su value property, o ne su checked? ar del to kad funkcinis komponentas?

export default AddHerbForm;
