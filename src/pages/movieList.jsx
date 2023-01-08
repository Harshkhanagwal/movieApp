import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style/home.css'
import Card from '../components/card';
import { useParams } from 'react-router-dom';

const MovieList = () => {

    const [popular, setPopular] = useState();
    const {type} = useParams()
    useEffect(() => {

        let url = `https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPopular(data.results));
    }, [type])
    return (
        <>
            <div className="main">
                <div className="container hero-section">
                    <h1 className='heading'>{type === "top_rated" ? "Top Rated": type } Movies </h1>
                    <div className="cardArea">
                    {
                    popular.map(movie =>
                    (
                        <>
                            <Card imgSrc={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} title={movie ? movie.title : ""} vote={movie ? movie.vote_average : ""} dis={movie ? movie.overview : ""} id={movie ? movie.id : ""}  />
                        </>
                    )
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieList