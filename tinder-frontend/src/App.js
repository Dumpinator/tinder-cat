import React, { useState, useEffect } from 'react'
import axios from './Services/axios'
import './App.css'
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import Wrapper from './Wrapper'

function App() {
   
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await axios.get('/cards')
            setCats(res.data)
            setLoading(false)
        }
        fetchData()
    }, [])
  
    const swiped = (direction, nameToDelete) => {
        console.log("removing : " + nameToDelete)
        //setLastDirection(direction)
    }

  return (
    <div className="app">
      <Header />
      <TinderCards cats={cats} loading={loading} />
      <SwipeButtons />
    </div>
  )
}

export default App