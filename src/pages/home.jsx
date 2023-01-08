import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style/home.css'
import { Link } from 'react-router-dom';
import Card from '../components/card';

const Home = () => {

    const [popular, setPopular] = useState();

    useEffect(() => {

        let url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPopular(data.results));
    }, [])
    return (
        <>
            <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
                {
                    popular.map(movie =>
                    (
                        <>
                            <Link className="link" to={`/movies/${movie.id}`}>
                                <div className="poster_cnt">
                                    <div className="inner_poster">

                                        <div className="movie_title">{movie ? movie.title : ""}</div>
                                        <div className="avg_vot">Avg Vote  : {movie ? movie.vote_average : ""}</div>
                                        <div className="movie_rdate">Release Date : {movie ? movie.release_date : ""}</div>
                                        <div className="movie_details">{movie ? movie.overview : ""}</div>
                                    </div>
                                </div>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="poster of movie" />
                                </div>
                            </Link>
                        </>
                    )
                    )}
            </Carousel>
            <div className="main">
                <div className="container hero-section">
                    <h1 className='heading'>Popular Movies </h1>
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

export default Home