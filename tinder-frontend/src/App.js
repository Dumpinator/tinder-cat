import React, { useState, useEffect, useCallback } from 'react'
import { UserContext } from './ContextAPI'
import axios from './Services/axios'
import './App.css'
import Header from './Components/Header'
import TinderCards from './Components/TinderCards'
import SwipeButtons from './Components/SwipeButtons'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {

  const [cats, setCats] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [once, setOnce] = useState(false)
  const [count, setCount] = useState(1)

  const fetchData = async () => {
      try {
        setIsLoaded(true)
        const res = await axios.get('/cards')
        setCats(res.data)
        setOnce(true)
        setIsLoaded(false)
      } catch (error) {
        console.error(error)
      }
  }

  const onLiked = useCallback(() => {
    console.log('swipe à droite')
    const retiredCats = cats.slice(-1*count)
    const myId = retiredCats[0]._id
    const onRemoveCard = (id) => {
      setCats( prevCats =>
        prevCats.map((cat) => {
          if(cat._id === id) cat.statut = 'liked'
          return cat
        }))
      setCount(prevCount => prevCount+1)
    }
    onRemoveCard(myId)
  }, [count, cats])

  const onUnliked = useCallback(() => {
    console.log('swipe à gauche')
    const retiredCats = cats.slice(-1*count)
    const myId = retiredCats[0]._id
    const onRemoveCard = (id) => {
      setCats( prevCats =>
        prevCats.map((cat) => {
          if(cat._id === id) cat.statut = 'unliked'
          return cat
        }))
      setCount(prevCount => prevCount+1)
    }
    onRemoveCard(myId)
  }, [count, cats])

  useEffect(() => {
    if (once === false) { fetchData() }
    return () => {
      //console.log(once);
    }
  }, [once, onUnliked, onLiked])

  return (
    <UserContext.Provider value={cats}>
      <div className="app">
        <Router>
          <Switch>

            <Route exact path="/">
              <Header />
              <TinderCards isLoaded={isLoaded} onUnliked={onUnliked} onLiked={onLiked} />
              <SwipeButtons onLiked={onLiked} onUnliked={onUnliked} />
            </Route>

            <Route exact path="/profil">
              <Header />
              <h1>profil</h1>
            </Route>

            <Route exact path="/chat">
              <Header />
              <h1>chat</h1>
            </Route>

            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
    )
}

export default App