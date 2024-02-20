import React, { useEffect, useState } from 'react'
import '../styles/News.css'
import axios from 'axios';

const News = () => {

    const [news, setnews] = useState([]);

    const fetchnews = async () => {

        try {
            const apikey = "0e340abbb4c44cfc89182887fab9b8f1";
            const options = {
                method: 'GET',
                url: `https://newsapi.org/v2/everything?q=keyword&apiKey=${apikey}`,

            };

            const response = await axios.request(options);

            console.log(response.data);
            setnews(response.data.articles);

        } catch (error) {
            console.error('Error fetching pictures:', error);
            console.error(error);

        }
    }

    useEffect(() => {
        fetchnews();
    }, [])



    return (


        <div className='news_overall'>
            {
                news.map((news) => (
                    <div class="card">
                        <div class="image">
                            <img src={news.urlToImage} alt="no" width={200} />
                        </div>
                        <div class="details">
                            <h2 class="title">{news.title}</h2>
                            <p class="author">Author: {news.author}</p>
                            <p class="description">{news.description}</p>
                        </div>
                    </div>
                ))

            }
        </div>


    )
}

export default News