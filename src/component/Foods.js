import React from 'react'

import Row from '../basic/Row'

import FoodItem from '../component/FoodItem'

function Foods() {
  const listFood = [
    {
      'name': 'Kentang Premium Lambwesto',
      'rating': 4.5,
      'address': 'by Kulina • Surabaya',
      'price': 70000,
      'image': '/uploads/food_img.jpeg',
    },
    {
      'name': 'Ayam Bakar Luber, Pasar Minggu',
      'rating': 5,
      'address': 'by Kulina • Surabaya',
      'price': 40000,
      'image': '/uploads/food_img2.jpeg',
    },
    {
      'name': 'Healthy Dinner',
      'rating': 4.7,
      'address': 'by Kulina • Surabaya',
      'price': 54000,
      'image': '/uploads/food_img3.jpeg',
    },
    {
      'name': 'Nasi Mangkok Dinner',
      'rating': 4.8,
      'address': 'by Kulina • Surabaya',
      'price': 38000,
      'image': '/uploads/food_img4.jpeg',
    }
  ]

  return (
    <Row align_center mt="16px" vertical>
      {
        listFood.map((value, index) => {
          return <FoodItem food={ value } key={ index } />
        })
      }
    </Row>
  )
}

export default Foods
