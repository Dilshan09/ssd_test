import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NasaPhoto(){
    const [photoData, setPhotoData] = useState(null);
    
    useEffect(() =>{
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch (
                `https://api.nasa.gov/planetary/apod?api_key=qDIvJaK7d6inIVi5eOk1lSqfvTaRjdeHFodze0QN `
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data); //to check coming api data
        }
    }, []);

    if(!photoData) return <div/>;

    return(
        <>
            <div className="nasa-photo">
                {photoData.media_type == "image" ? (
                <img src={photoData.url} alt={photoData.title} className="photo"/>    
                ) : (
                    <iframe
                    title="space-video"
                    src={photoData.url}
                    border= "none"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                    />
                )}
                <div>
                    <h1>{photoData.title}</h1>
                    <p className="date">{photoData.date}</p>
                    <p className="explanation">{photoData.explanation}</p>
                </div>
            </div>
        </>
    );
}