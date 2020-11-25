import React, { useState, useEffect } from 'react'
//import { v4 as uuidv4 } from 'uuid'
import { Swipeable, direction } from 'react-deck-swiper'
import './TinderCards.css'

function TinderCards(props) {
    console.log('props debut', props)
    const { cats, isLoaded } = props
    const [cards, setCards] = useState([])

    useEffect(() => {
        console.log(isLoaded)
        if (isLoaded === false)
            setCards(cats)
        //console.log('useEffect end')
    }, [isLoaded, cats])

    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            // handle right swipe
            console.log('RIGHT')
            //return;
        }
        if (swipeDirection === direction.LEFT) {
            // handle left swipe
            console.log('LEFT')
            //return;
        }
        //console.log('end swipe');
  }
  console.log('props end', props)
    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                { !isLoaded ? cards.map( cat => 
                        <div className='swipe' key={cat._id} id={ cat._id } >
                            <Swipeable onSwipe={handleOnSwipe}>
                                <div className='card' style={{ backgroundImage: `url(${cat.imgUrl})` }}>
                                    <div className='description'>
                                        <h3 >{cat.name}</h3>
                                    </div>
                                </div>
                            </Swipeable>
                        </div>
                    )
                    : "LOADING.." 
                }
            </div>
        </div>
    )
}

export default TinderCards
