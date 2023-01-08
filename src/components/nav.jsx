import React from 'react'
import Logo from './logo'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <header>
        <div className="nav-area container ">
            <div className="logo-area">
               <Link to={"/"}  className="link"><Logo/></Link>
            </div>

            <nav>
                <Link to={"movies/popular"} className="link"><p className="nav-elm">Popular</p></Link>
                <Link to={"movies/top_rated"} className="link"><p className="nav-elm">Top Rated</p></Link>
                <Link to={"movies/upcoming"} className="link"><p className="nav-elm">upcoming</p></Link>
                <Link to={"about"} className="link"><p className="nav-elm">About US</p></Link>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Nav