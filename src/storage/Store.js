import React, { createContext, useState } from 'react';

import { generateListWeek, getFirstValidDate } from '../logic/Calendar'

export const StoreContext = createContext(null)
export const StoreProvider = ({children}) => {
  const listDay = generateListWeek(14)
  const firstValidDateIndex = getFirstValidDate(listDay)

	const [location, setLocation] = useState("Tokopedia Tower")
	const [calendar, setCalendar] = useState(firstValidDateIndex)
	const [mealTime, setMealTime] = useState(0)
	const [cartItem, setCartItem] = useState(0)
	const [cartPrice, setCartPrice] = useState(0)
	const [locationData, setLocationData] = useState([])
	const [showModalLocation, setShowModalLocation] = useState(false)

	const store = {
		location, setLocation,
		calendar, setCalendar,
		mealTime, setMealTime,
		cartItem, setCartItem,
		cartPrice, setCartPrice,
		showModalLocation, setShowModalLocation,
		locationData, setLocationData,
		listDay,

	}

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}