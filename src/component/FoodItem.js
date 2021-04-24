import React, { useContext } from 'react'

import Row from '../basic/Row'
import Button from '../basic/Button'
import Card from '../basic/Card'
import Image from '../basic/Image'
import Paragraph from '../basic/Paragraph'

import Plus from '../images/plus.svg'

import { generateRating, moneyFormat } from '../logic/Foods'

import { StoreContext } from '../storage/Store'

function FoodItem(props) {
  const data = props.food
  const rating = generateRating(data.rating)
  const { cartItem, setCartItem, cartPrice, setCartPrice } = useContext(StoreContext)

  const addToCart = () => {
    setCartItem(parseInt(cartItem) + 1)
    setCartPrice(parseInt(cartPrice) + parseInt(data.price))
  }

  return (
    <Card vertical mt="16px">
      <Image src={ data.image } className="full-img" />
      <Row align_center key="rating">
        <Paragraph font_size="20px">{ data.rating }</Paragraph>
        <Row ml="8px">
          { rating }
        </Row>
      </Row>
      <Paragraph mt="8px" font_size="20px" elipsis main_text bold>{ data.name }</Paragraph>
      <Paragraph mt="8px" font_size="16px" elipsis sub_text>{ data.address }</Paragraph>
      <Row align_center mt="16px" space_between>
        <Paragraph font_size="20px" main_text bold>Rp. { moneyFormat(data.price) }</Paragraph>
        <Button centered_content add_cart rounded onClick={ addToCart }>
          ADD
          <Image src={ Plus } ml="4px" />
        </Button>
      </Row>
    </Card>
  )
}

export default FoodItem
