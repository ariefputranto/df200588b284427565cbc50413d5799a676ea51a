import React, { useContext } from 'react';

import Image from '../basic/Image'
import Row from '../basic/Row'
import Paragraph from '../basic/Paragraph'
import Circle from '../basic/Circle'

import MarkerIcon from '../images/marker.svg'

import { StoreContext } from '../storage/Store';

function LocationModalItem(props) {
  const { setShowModalLocation, setLocation, setLocationData } = useContext(StoreContext)

  const selectLocation = () => {
    setShowModalLocation(false)
    setLocation(props.address)
    setLocationData([])
  }

  return (
    <Row mt="16px" align_center onClick={ selectLocation }>
      <Circle active={ true } light_grey flex>
        <Image src={ MarkerIcon } center medium />
      </Circle>
      <Row vertical ml="8px" overflow="hidden">
        <Paragraph bold>{ props.address }</Paragraph>
        <Paragraph elipsis>{ props.address_detail }</Paragraph>
      </Row>
    </Row>
  )
}

export default LocationModalItem
