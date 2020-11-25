import React, { useState, useEffect } from 'react'
import axios from './Services/axios'
import './App.css'
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'

function App() {

  const [cats, setCats] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        try {
          setIsLoaded(true)
          const res = await axios.get('/cards')
          setCats(res.data)
          setIsLoaded(false)
        } catch (error) {
          console.log(error)
        }
    }
    fetchData()
  }, [])

  const onUnliked = () => {

    const myId = cats.slice(-1)[0]._id
    console.log('swipe à gauche')

    const onRemoveCard = (id) => {
      setCats(
        cats.map((cat) => {
          if(cat._id === id) cat.statut = 'unliked'
          return cat
        }))
    }
    onRemoveCard(myId)
  }
  const onLiked = () => {
    console.log('swipe à droite')
  }

  return (
    <div className="app">
      <Header />
      <TinderCards cats={cats} isLoaded={isLoaded} />
      <SwipeButtons onLiked={onLiked} onUnliked={onUnliked} />
    </div>
  )
}

export default App