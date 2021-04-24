import React, { useContext, useEffect, useState } from 'react';

import Row from '../basic/Row'
import Button from '../basic/Button'

import { StoreContext } from '../storage/Store';

function MealTime() {
  const mealTimeList = ['Lunch', 'Dinner']
  const { mealTime, setMealTime } = useContext(StoreContext)
  const [isScrollUp, setIsScrollUp] = useState(false)

  var scrollOffset = 0

  useEffect(() => {
    window.onscroll = () => {
      setIsScrollUp(window.pageYOffset > scrollOffset)
      scrollOffset = window.pageYOffset
    }
  }, [])

  const handleClick = (event) => {
    setMealTime(parseInt(event.target.dataset.index))
  }

  return !isScrollUp && (
    <div>
      <Row align_center overflow_scroll mt="16px">
      	{
          mealTimeList.map((value, index) => {
            var type = value.toLowerCase()
            return mealTime === index ? 
              <Button date={ value } full type={ type } default_reversed data-index={ index } key={ index } onClick={ handleClick }>{ value }</Button> : 
              <Button date={ value } full type={ type } data-index={ index } key={ index } onClick={ handleClick }>{ value }</Button>;
          })
        }
      </Row>
    </div>
  )
}

export default MealTime
