import React from "react";

const IndividualHerb = (props) => {
    return (
        props.herbs.length > 0 ? (
            props.herbs.map(herb => {
                const {id, name, characteristics, medicalConditions} = herb;
                return (
                    <div>
                        <button>Suskleisti</button>
                        <div>
                            <h1>{id}. {name}</h1>
                        </div>
                        <div>
                            <h2>Charakteristikos</h2>
                            <p>{characteristics}</p>
                        </div>
                        <div>
                            <h3>Papildomi vartojimo apribojimai:</h3>
                            <p>{characteristics.hasHighBloodPressure}</p>
                            <p>{characteristics.child}</p>
                            <p>{characteristics.pregnant}</p>
                        </div>
                    </div>

                )
            })
        ) : (
            <tr>
                <td colSpan={8}>Vaistažolių sąrašas tuščias</td>
            </tr>
        )
    )
}

export default IndividualHerb;
