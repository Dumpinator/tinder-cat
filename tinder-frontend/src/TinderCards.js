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
            url: 'https://i2.wp.com/suddenlycat.com/wp-content/uploads/2020/09/SC-Blog-Background.png?fit=1880%2C1200&ssl=1',
        },
        {
            name: 'Mistigri 3',
            url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/68540407_1127266664143882_3577780982465429504_o.jpg?_nc_cat=104&ccb=2&_nc_sid=9267fe&_nc_ohc=SFf6RSyZuf8AX9P2m7J&_nc_ht=scontent-cdg2-1.xx&oh=703cc426ea3a632287dcd7eed614571d&oe=5FD752C5',
        },
        {
            name: 'Mistigri 4',
            url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/66190951_1100684310135451_5005858183911047168_o.jpg?_nc_cat=107&ccb=2&_nc_sid=9267fe&_nc_ohc=bXHyCGxkv7wAX_dc4B7&_nc_ht=scontent-cdg2-1.xx&oh=af708d12d74beb3b5dd6b812aabb3504&oe=5FD7F308',
        },
        {
            name: 'Mistigri 5',
            url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/67649278_1122770471260168_1790797042247794688_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=pds0Dg275s8AX9p9miJ&_nc_ht=scontent-cdg2-1.xx&oh=39048f5829c6101b8bb369040730db1d&oe=5FD6400F',
        },
        {
            name: 'Mistigri 6',
            url: 'https://i.redd.it/d92va0na37531.jpg',
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
