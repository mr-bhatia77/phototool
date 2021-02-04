import React, { useState, useContext } from 'react'
import './Image.css'
import { compareContext } from '../App'
function Image(props) {

    const [isCompare, setisCompare] = useState(false)
    const compare = useContext(compareContext)
    const compareHandler = () => {
        let obj = {
            id: props.id,
            url:props.url,
            title:props.title,
            thumbnailUrl:props.thumbnailUrl
        }
        if (!isCompare)
            compare.tableDispatch({ type: 'compare', payload: obj })
        else
            compare.tableDispatch({ type: 'remove', payload: obj.id })
        setisCompare(isCompare => !isCompare)
    }
    return (
        <div className="imageCard">
            <img height="90px" width="150px" src={props.url} alt="nothing found"></img>
            <div className="container">
            <p>ID={props.id}</p>
            <p>Title={props.title}</p>
            <p className="url">Url=<a href={props.url}>{props.url}</a></p>
            <button onClick={compareHandler}>{isCompare ? 'REMOVE' : 'COMPARE'}</button>
        </div></div>
    )
}

export default Image
