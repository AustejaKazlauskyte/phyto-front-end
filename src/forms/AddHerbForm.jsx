import React, {useState} from 'react';
import axios from 'axios';

import {useAuth} from "hooks/Auth";

const AddHerbForm = (props) => {

    const initHerb = {
        id: null,
        name: '',
        characteristics: [{
            title: '',
            hasHighBloodPressure: false,
            child: false, pregnant: false
        }],
        medicalConditions: [{
            title: ''
        }]
    };


    const [herb, setHerb] = useState(initHerb);
    const [isError, setIsError] = useState(false);
    const {isAuthenticated, setToken} = useAuth();

    /*

        const handleChange = ({target: {name, value}}) => {
            setHerb({...herb, [name]: value});
        }

        const handleChangeCheckbox = ({target: {name, checked}}) => {
            setHerb({...herb, [name]: checked});
        }
    */
    /*  const handleChange = ({target: {name, value, type, checked}}) => setHerb(prevState => ({
          ...prevState, [name]: (type === 'checkbox' ? checked : value)
      }));*/

    const handleChange = ({target: {name, value, type, checked}}) => {
        let newHerb = {...herb};
        const val = (type === 'checkbox' ? checked : value);
        if (name.indexOf(".") > -1) {
            const items = name.split(".");
            herb[items[0]][0][items[1]] = val;
        } else
            newHerb.name = val;
        setHerb(newHerb);
    }

    /* const handleSubmit = e => {
         e.preventDefault();
         if (herb.name) props.addHerb(herb);
         alert('testing');
     }*/

    function postData(event) {
        event.preventDefault();
        axios.post("http://localhost:8080/api/herbs", herb, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            }
        }).then(result => {
            if (result.status === 200) {
                setToken(result.data.token);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
        if (herb.name) props.addHerb(herb);
    }

    return (
        <form>
            <label>Vaistažolės pavadinimas</label>
            <input className="u-full-width" type="text" name="name" value={herb.name} onChange={handleChange}/>
            <label>Charakteristikos</label>
            <input className="u-full-width" type="text" name="characteristics.title"
                   value={herb.characteristics[0].title}
                   onChange={handleChange}/>
            <label>Ar tinka turinčiam aukštą spaudimą?</label>
            <input className="u-full-width" type="checkbox" name="characteristics.hasHighBloodPressure"
                   checked={herb.characteristics[0].hasHighBloodPressure} onChange={handleChange}/>
            <label>Ar tinka vaikams?</label>
            <input className="u-full-width" type="checkbox" name="characteristics.child"
                   checked={herb.characteristics[0].child}
                   onChange={handleChange}/>
            <label>Ar tinka nėščiosioms?</label>
            <input className="u-full-width" type="checkbox" name="characteristics.pregnant"
                   checked={herb.characteristics[0].pregnant} onChange={handleChange}/>
            <label>Negalavimai</label>
            <input className="u-full-width" type="text" name="medicalConditions.title"
                   value={herb.medicalConditions[0].title}
                   onChange={handleChange}/>
            <button className="button-primary" type="submit" /*onClick={handleSubmit}*/
                    onClick={postData}>Pridėti vaistažolę
            </button>
        </form>
    )
}

export default AddHerbForm;
