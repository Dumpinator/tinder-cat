import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Swipeable, direction } from 'react-deck-swiper'
import './TinderCards.css'

const data = ['Alexandre', 'Thomas', 'Lucien']

function TinderCards(props) {
    console.log(props);
    const { cats, loading } = props

    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            // handle right swipe
            return;
        }
        if (swipeDirection === direction.LEFT) {
            // handle left swipe
            return;
        }
  }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                    { !loading ? cats.map(cat => 

                                <Swipeable 
                                    key={uuidv4()}
                                    onSwipe={handleOnSwipe}>
                                    <div className='swipe'>
                                        <div className='card' style={{ backgroundImage: `url(${cat.imgUrl})` }}>
                                            <div className='description'>
                                                <h3 >{cat.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                 </Swipeable>
                            )
                     : "LOADING.." 
                    }
            </div>
            <div className='buttons'>
                <button onClick={() => console.log('left')}>Swipe left!</button>
                <button onClick={() => console.log('right')}>Swipe right!</button>
                {/* lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2> */}
            </div>
        </div>
    )
}

export default TinderCards
