import React, {useState} from "react"
import herbList from "./Data.js";
import HerbTable from "../tables/HerbTable";
import AddHerbForm from "../forms/AddHerbForm";
import EditHerbForm from "../forms/EditHerbForm";

const HerbDatabase = () => {

    const [herbs, setHerbs] = useState(herbList);

    const addHerb = herb => {
        herb.id = herbs.length + 1;
        setHerbs([...herbs, herb]);
    }

    const deleteHerb = id => setHerbs(herbs.filter(herb => herb.id !== id));

    const [editing, setEditing] = useState(false);

    const initialHerb = {id: null, name: ''};

    const [currentHerb, setCurrentHerb] = useState(initialHerb);

    const editHerb = (id, herb) => {
        setEditing(true);
        setCurrentHerb(herb);
    }

    const updateHerb = (newHerb) => {
        setHerbs(herbs.map(herb => (herb.id === currentHerb.id ? newHerb : herb)))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="five columns">
                    { editing ? (
                        <div>
                            <h2>Redaguoti vaistažolę</h2>
                            <EditHerbForm
                                currentHerb={currentHerb}
                                setEditing={setEditing}
                                updateHerb={updateHerb}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Pridėti vaistažolę</h2>
                            <AddHerbForm addHerb={addHerb}/>
                        </div>
                    )}
                </div>
                <div className="seven columns">
                    <h2>Peržiūrėti visas vaistažoles</h2>
                    <HerbTable herbs={herbs} deleteHerb={deleteHerb} editHerb={editHerb} />
                </div>
            </div>
        </div>
    )
}

export default HerbDatabase

