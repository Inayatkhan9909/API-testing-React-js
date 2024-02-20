

import React, { useEffect, useState } from 'react'
import axios from 'axios';

import '../styles/Home.css'

const Home = () => {

    const [pics, setpics] = useState([]);

    const fetchpics = async () => {



        try {
            const options = {
                method: 'GET',
                url: 'https://free-images-api.p.rapidapi.com/images/wallpaper',
                headers: {
                    'X-RapidAPI-Key': '5c115289famsh32f2468c25c30f5p1bd5e3jsncbd5aa616 b84',
                    'X-RapidAPI-Host': 'free-images-api.p.rapidapi.com'
                }
            };


            const response = await axios.request(options);
            
            console.log(response.data);
            setpics(response.data.results)
        } catch (error) {
            console.error('Error fetching pictures:', error);
            console.error(error);

        }
    }

    useEffect(() => {
        fetchpics();
    }, []);

    const handleDownload = (photoUrl, photographerLink) => {

        const photographerUsername = photographerLink.split('@')[1];

        const anchor = document.createElement("a");

        anchor.href = photoUrl;

        anchor.download = `${photographerUsername}_photo.jpg`;

        anchor.click();
    };
    

    return (
        <div className='home'>

            <div className="title">
                <h1>Download free images</h1>
            </div>

            <div className="grid">

                {
                    
                    pics.map((pics) => (
                        
                        <div className="card">
                           
                            <img src={pics.image} alt="no" width={200} />
                            <div className='author'>
                                <h3>Author :</h3>
                                <p> {pics.by.split('@')[1]} </p>
                            </div>
                            <button className='button-download' onClick={() => handleDownload(pics.download, pics.by)}>
                                Download
                            </button>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Home