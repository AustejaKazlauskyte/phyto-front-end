import React, {useState} from "react"
import HerbTable from "../tables/HerbTable";
import AddHerbForm from "../forms/AddHerbForm";
import EditHerbForm from "../forms/EditHerbForm";
import {useAuth} from "../context/auth";
import herbList from "./Data";
import ExtendedHerbTable from "../tables/ExtendedHerbTable";


const HerbDatabase = () => {
    const {setToken} = useAuth();

    function logOut(event) {

        setToken(null);
    }

    const [herbs, setHerbs] = useState(herbList);

    /*const BASE_URL = "http://localhost:8080/api/herbs";
*/
    /* const [herbs, setHerbs] = React.useState([]);*/

    /* React.useEffect(() => {
         fetch(BASE_URL)
             .then(res => res.json())
             .then(herbs => {
                 setHerbs(herbs);
             })

     }, [])
 */
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

    const [viewAll, setViewAll] = useState(false);

    const viewExtendedHerbs = (herb) => {
        /*setViewAll(true);*/
        setViewAll(!viewAll);
    }

    return (
        <div className="container">
            <div>
                <button className="button-primary" onClick={logOut}>Atsijungti</button>
            </div>
            {viewAll ? (<div>
                    <h2>Išplėstinis vaistažolių sąrašas</h2>
                    <ExtendedHerbTable herbs={herbs}
                                       viewAll={viewAll}
                                       setEditing={setEditing}
                                       updateHerb={updateHerb}/>
                </div>
            ) : (  <div className="row">
                <div className="row">
                    <div className="five columns">
                        {editing ? (
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
                        <HerbTable herbs={herbs}
                                   deleteHerb={deleteHerb}
                                   editHerb={editHerb}
                                   viewExtendedHerbs={viewExtendedHerbs}/>
                    </div>
                </div>
                }
            </div>)}
        </div>
    )
}

export default HerbDatabase

//grizti prie session storage, atsijungti mygtuko ar daro full page reload, prevent deafult jeigu taip yra, jegu jis padeda i s tokena nuli
