import React,{useContext} from 'react'
import { compareContext } from '../App'
import Table from './Table'
function TableComponent() {
    const compare = useContext(compareContext)
   
    return (
        <div className="tableContainer">
            {compare.tableState.length===0?'No Image Selected':
            <Table data={compare.tableState}></Table>}
        </div>
    )
}

export default TableComponent
