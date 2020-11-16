import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import './TinderCards.css'

import Card from 'react-tinder-card'

function TinderCards() {

    //const [lastDirection, setLastDirection] = useState([])
    const [cats, setCats] = useState([
        {
            name: 'Mistigri',
            url: 'https://pbs.twimg.com/media/CUcuIprWsAE77zN?format=jpg&name=small',
        },
        {
            name: 'Mistigri 2',
            url: 'https://pbs.twimg.com/media/CUcuIprWsAE77zN?format=jpg&name=small',
        },
        {
            name: 'Mistigri 3',
            url: 'https://pbs.twimg.com/media/CUcuIprWsAE77zN?format=jpg&name=small',
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing : " + nameToDelete)
        //setLastDirection(direction)
    }

    const outOfFrame = name => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                { cats.map((cat) => (
                    <Card
                        className='swipe'
                        key={uuidv4()}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, cat.name)}
                        onCardLeftScreen={() => outOfFrame(cat.name)}
                    >
                        <div className='card' style={{ backgroundImage: `url(${cat.url})` }}>
                            <h3>{cat.name}</h3>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
