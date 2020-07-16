import React, {useEffect, useState} from 'react';

const EditHerbForm = (props) => {

    // naudojam hooks. UseEffect funkcija padaro kad turėtumėm editinamos herb tesktą laukeliuose

    useEffect(() => {
        setHerb(props.currentHerb)
    }, [props])

    const [herb, setHerb] = useState(props.currentHerb);

    const handleChange = ({target: {name, value, type, checked}}) => {
        let newHerb = {...herb};
        const val = (type === 'checkbox' ? checked : value);
        if (name.indexOf(".") > -1) {
            const items = name.split(".");
            herb[items[0]][items[1]] = val;
        } else
            newHerb.name = val;
        setHerb(newHerb);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (herb.name) props.updateHerb(herb);
    }

    return (
        <form>
            <label>Vaistažolės pavadinimas</label>
            <input className="u-full-width" type="text" name="name" value={herb.name} onChange={handleChange}/>
            <label>Charakteristikos</label>
            <input className="u-full-width" type="text" name="characteristics.title"
                   value={herb.characteristics.title}
                   onChange={handleChange}/>
            <label>Ar tinka turinčiam aukštą spaudimą?</label>
            <input className="u-full-width" type="checkbox" name="characteristics.hasHighBloodPressure"
                   checked={herb.characteristics.hasHighBloodPressure} onChange={handleChange}/>
            <label>Ar tinka vaikams?</label>
            <input className="u-full-width" type="checkbox" name="characteristics.child"
                   checked={herb.characteristics.child}
                   onChange={handleChange}/>
            <label>Ar tinka neščiosioms?</label>
            <input className="u-full-width" type="checkbox" name="characteristics.pregnant"
                   checked={herb.characteristics.pregnant} onChange={handleChange}/>
            <label>Negalavimai</label>
            <input className="u-full-width" type="text" name="medicalConditions.title"
                   value={herb.medicalConditions.title}
                   onChange={handleChange}/>

            <button className="button-primary" type="submit" onClick={handleSubmit}>Redaguoti vaistažolę</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Atšaukti</button>
            {/*<button >Grįžti</button>*/}
        </form>
    )
}

export default EditHerbForm;
