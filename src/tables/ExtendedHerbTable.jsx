import React from "react";

const ExtendedHerbTable = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Pavadinimas</th>
                <th>Characteristikos</th>
                <th>Ar tinka turinčiam aukštą spaudimą?</th>
                <th>Ar tinka vaikams?</th>
                <th>Ar tinka nėščiosioms?</th>
                <th>Negalavimai</th>
                <th>Veiksmai</th>
            </tr>
            </thead>
            <tbody>
            {props.herbs.length > 0 ? (
                props.herbs.map(herb => {
                    const {id, name, characteristics, medicalConditions} = herb;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{characteristics.title}</td>
                            <td>{characteristics.hasHighBloodPressure === "checked" ? "TAIP" : "NE"}</td>
                            <td>{characteristics.child === "checked" ? "TAIP" : "NE"}</td>
                            <td>{characteristics.pregnant === "checked" ? "TAIP" : "NE"}</td>
                            <td>{medicalConditions.title}</td>
                            <td>

                                <i onClick={() => props.viewExtendedHerbs(herb)} className="far fa-eye"></i>
                                <i onClick={() => props.editHerb(id, herb)} className="far fa-edit"></i>
                                <i onClick={() => props.deleteHerb(id)} className=" fas fa-trash"></i>
                            </td>
                        </tr>
                    )
                })
            ) : (
                <tr>
                    <td colSpan={8}>Vaistažolių sąrašas tuščias</td>
                </tr>
            )
            }
            </tbody>
        </table>
    )
}

export default ExtendedHerbTable;
