import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/home'
import MovieList from './pages/movieList'
import Details from './pages/movieDetail'
import About from './pages/About'

const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='movies/:type' element={<MovieList/>}/>
          <Route path='movie/:id' element={<Details/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='/*' element={<h1>ERROR</h1>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App