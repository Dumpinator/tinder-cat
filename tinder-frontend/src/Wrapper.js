import React from 'react'
import { Swipeable, direction } from 'react-deck-swiper';


const data = ['Alexandre', 'Thomas', 'Lucien']

const Wrapper = (props) => {
  
    const { cats } = async () => await props
    console.log(cats);
    
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
    <Swipeable onSwipe={handleOnSwipe}>
        { data.map(item => 
            <div className="card">
                Your card content : ${item}
            </div>
            )
        }
    </Swipeable>
  );
};

export default Wrapper