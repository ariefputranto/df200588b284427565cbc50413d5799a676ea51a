import React, { useContext } from 'react';

import Row from '../basic/Row'
import Paragraph from '../basic/Paragraph'

import { getFullName } from '../logic/Calendar'

import { StoreContext } from '../storage/Store';

function DateLabel() {
  const { calendar, listDay } = useContext(StoreContext)

  return (
    <Row vertical mt="220px">
      <Paragraph font_size="20px" bold sub_text mx="8px">{ getFullName(listDay[calendar]) }</Paragraph>
    </Row>
  )
}

export default DateLabel
