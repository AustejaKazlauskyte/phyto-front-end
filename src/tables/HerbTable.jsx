import React from 'react';

const HerbTable = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Pavadinimas</th>
                <th>Veiksmai</th>
            </tr>
            </thead>
            <tbody>
            {props.herbs.length > 0 ? (
                props.herbs.map(herb => {
                    const {id, name} = herb;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
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
                    {<td colSpan={3}>Vaistažolių sąrašas tuščias</td>}

                </tr>
            )
            }
            </tbody>
        </table>
    )
}

export default HerbTable;
