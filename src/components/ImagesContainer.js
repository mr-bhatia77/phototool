import React, { useEffect,useState } from 'react'
import './ImagesContainer.css'
import Image from './Image'
function ImagesContainer() {

    const [images, setimages] = useState([])
    const [error,setError]=useState('Loading Data...')

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=20')
            .then((response) => response.json())
            .then((json) => setimages(json))
            .catch(()=>setError('something went wrong'))
    }, [])
//console.log(images)
    return (
        <div className="imagesContainer">
            {images.length===0?error : 
            images.map((image)=><Image key={image.id} 
            id={image.id}
            albumId={image.albumId}
            title={image.title}
            thumbnailUrl={image.thumbnailUrl}
            url={image.url}>
    </Image>)}
        </div>
    )
}

export default ImagesContainer
