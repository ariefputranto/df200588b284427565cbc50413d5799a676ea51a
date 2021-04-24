import React, { useContext } from 'react';

import Row from '../basic/Row'

import CalendarItem from '../component/CalendarItem'

import { StoreContext } from '../storage/Store';

function Calendar() {
  const { calendar, setCalendar, listDay } = useContext(StoreContext)

  return (
    <div>
      <Row align_center overflow_scroll mt="16px">
      	{
          listDay.map((value, index) => {
            return calendar === index ? 
              <CalendarItem date={ value } active={ true } index={ index } key={ index } setActiveItem={ (index) => setCalendar(index) } /> : 
              <CalendarItem date={ value } index={ index } key={ index } setActiveItem={ (index) => setCalendar(index) } />;
          })
        }
      </Row>
    </div>
  )
}

export default Calendar
