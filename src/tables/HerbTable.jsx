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
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                                <button onClick={() => props.deleteHerb(id)}>Ištrinti</button>
                                <button onClick={() => props.editHerb(id, herb)}>Redaguoti</button>
                            </td>
                        </tr>
                    )
                })
            ) : (
                <tr>
                    <td colSpan={3}>No herbs found</td>
                </tr>
            )
            }
            </tbody>
        </table>
    )
}

export default HerbTable;
