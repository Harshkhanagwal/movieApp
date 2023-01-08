import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style/home.css'
import '../style/detail.css'
import { useParams } from 'react-router-dom';

const Details = () => {

    const [movie, setMovie] = useState();
    const { id } = useParams()
    useEffect(() => {

        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMovie(data));

    }, [id])

    return (
        <>
            <div className="main">

                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className='bannerImg' alt="movie details" height={"700px"} />

                <div className="container movieDetails">
                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} className='posterImg' alt="movie" height={"500px"} />
                    <div className="detail-txt container">
                        <h1 className='heading' >{movie ? movie.title : ""}</h1>
                        <span className="subhead">
                        {movie ? movie.production_companies[0].name : ""}
                        </span>
                        <div className="detail-bx-1">
                            <div className="avg_vot_d">{movie ? movie.vote_average : ""}⭐</div>
                            <div className="movie_rdate_d">Release Date : {movie ? movie.release_date : ""}</div>
                        </div>
                        <div className="detail-bx-2">
                            {
                                movie.genres.map((genres) => (
                                    <>
                                    <span className='genres'>{genres.name}</span>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="disBox container">
                    <h1>About</h1> 

                    <p>
                        {movie ? movie.overview : ""}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Details