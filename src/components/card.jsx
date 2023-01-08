import React from 'react'
import '../style/card.css'
import { Link } from 'react-router-dom'
const Card = (props) => {

    const style = {
        backgroundImage: `url(${props.imgSrc})`,
    }
    return (
        <>
            <Link to={`/movie/${props.id}`} className='link' >
                <div className="card" style={style}>
                    <div className="cardCnt">
                        <div className="cardCnt-txt">
                            <div className="cardCnt-txt-bx">
                                <p className='card-title'>{props.title}</p>
                                <p className="card-rate">{props.vote}</p>
                                <br />
                                <p className='discription'>{props.dis}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card