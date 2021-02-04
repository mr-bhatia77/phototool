import React from 'react'
import './Table.css'
function Table({data}) {
    //console.log(data)
    let rows=data.map((i)=><tr className="table-row"
     key={i.id}><td><img height="70px" src={i.url} alt="nothing found"></img></td>
    <td>{i.id}</td><td>{i.url}</td><td>{i.title}</td></tr>)
    return (
        <table className="responsive-table">
            <tbody>
                <tr className="table-header">
                <td className="col-1">Photo</td>
                <td className="col-2"> ID</td>
                <td className="col-3">URL</td>
                <td className="col-4">TITLE</td></tr>
            {rows}
            </tbody>
        </table>
    )
}

export default Table
