import React, {useEffect, useState} from 'react';

const EditHerbForm = (props) => {

    // naudojam hooks

    useEffect(() => {
        setHerb(props.currentHerb)
    }, [props])

    const [herb, setHerb] = useState(props.currentHerb);

    const handleChange = e => {
        console.log(e.target.name);
        console.log(e.target.value);
        const {name: name, value} = e.target;
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
