import React, {useEffect, useState} from 'react';

const EditHerbForm = (props) => {

    // naudojam hooks. UseEffect funkcija padaro kad turėtumėm editinamos herb tesktą laukeliuose

    useEffect(() => {
        setHerb(props.currentHerb)
    }, [props])

    const [herb, setHerb] = useState(props.currentHerb);

    const handleChange = e => {
        const {name, value} = e.target;
        setHerb({...herb, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (herb.name) props.updateHerb(herb);
    }

    return (
        <form>
            <label>Pavadinimas</label>
            <input className="u-full-width" type="text" name='name' value={herb.name} onChange={handleChange}/>
            <button className="button-primary" type="submit" onClick={handleSubmit}>Redaguoti vaistažolę</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Atšaukti</button>
        </form>
    )
}

export default EditHerbForm;
