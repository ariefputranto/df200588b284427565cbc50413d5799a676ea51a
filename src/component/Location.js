import React, { useContext } from 'react';

import Image from '../basic/Image'
import Row from '../basic/Row'
import Paragraph from '../basic/Paragraph'

import ArrowLeft from '../images/arrow-left.svg'
import ExpandIcon from '../images/expand-icon.svg'

import { StoreContext } from '../storage/Store';

function Location() {
  const { location, setShowModalLocation } = useContext(StoreContext)

  return (
    <div>
      <Row align_center>
	    	<Image src={ ArrowLeft } mr="16px" big />
      	<Row vertical overflow="hidden" onClick={ () => setShowModalLocation(true) }>
      		<Paragraph>Delivery address</Paragraph>
      		<Row>
      			<Paragraph font_size="20px" bold elipsis>{ location }</Paragraph>
      			<Image src={ ExpandIcon } />
      		</Row>
      	</Row>
      </Row>
    </div>
  )
}

export default Location
