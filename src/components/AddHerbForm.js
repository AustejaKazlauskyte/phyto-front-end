import React, {useState} from 'react';

const AddHerbForm = (props) => {

    const initHerb = {id: null, name: ''};

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
            <label>Pavadinimas</label>
            <input className="u-full-width" type="text" name='name' value={herb.name} onChange={handleChange}/>
            <button className="button-primary" type="submit" onClick={handleSubmit}>Pridėti vaistažolę</button>
        </form>
    )
}

export default AddHerbForm;
