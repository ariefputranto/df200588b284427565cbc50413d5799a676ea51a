import Circle from '../basic/Circle'
import Paragraph from '../basic/Paragraph'

import { getDayName, isAllowed } from '../logic/Calendar'

function CalendarItem(props) {
  const dayName = getDayName(props.date)
  const date = !isNaN(new Date(props.date)) ? new Date(props.date).getDate() : ''
  const isDisabled = !isAllowed(props.date)

  const handleClick = () => {
    if (!isDisabled) {
      props.setActiveItem(props.index)
    }
  }

  return (
    <div>
    	<Circle vertical first={ props.first } disabled={ isDisabled } active={ !isDisabled && props.active } onClick={() => handleClick()}>
    		<Paragraph align="center" font_size="14px">{ dayName }</Paragraph>
        <Paragraph bold font_size="16px" align="center">{ date }</Paragraph>
    	</Circle>
    </div>
  )
}

export default CalendarItem
