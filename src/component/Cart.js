import React, { useContext } from 'react'

import Row from '../basic/Row'
import Sticky from '../basic/Sticky'
import Paragraph from '../basic/Paragraph'
import Image from '../basic/Image'
import CartBasic from '../basic/Cart'

import CartIcon from '../images/cart.svg'
import ChevronRight from '../images/chevron-right.svg'

import { moneyFormat } from '../logic/Foods'

import { StoreContext } from '../storage/Store'

function Cart() {
  const { cartItem, cartPrice } = useContext(StoreContext)


  return cartItem > 0 && (
    <Sticky bottom transparent>
      <CartBasic>
        <Row align_center>
          <Row vertical flex_grow="3" flex>
            <Paragraph font_size="20px" bold>{ cartItem } Items | Rp. { moneyFormat(cartPrice) }</Paragraph>
            <Paragraph font_size="14px">Include price delivery</Paragraph>
          </Row>
          <Row flex>
            <Image src={ CartIcon } ml="auto" medium />
            <Image src={ ChevronRight } medium />
          </Row>
        </Row>
      </CartBasic>
    </Sticky>
  )
}

export default Cart
