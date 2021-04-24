const listDayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const fullListDayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const listMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// eslint-disable-next-line no-extend-native
Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

const generateListWeek = (rangeFromToday) => {
	var currentDate = new Date()
	var listDate = []
	for (var i = 0; i < rangeFromToday; i++) {
		listDate.push(currentDate.addDays(i))
	}

	return listDate
}

const getDayName = (date) => {
	date = new Date(date)
	return listDayOfWeek[date.getDay()]
}

const isAllowed = (date) => {
	date = new Date(date)
	const dayName = getDayName(date)
  return dayName !== 'Sat' && dayName !== 'Sun'
}

const getFirstValidDate = (dates) => {
	var firstDateIndex = 0
	for (var i = 0; i < dates.length; i++) {
		var date = new Date(dates[i])
		if (isAllowed(date)) {
			firstDateIndex = i
			break
		}
	}

  return firstDateIndex
}

const getFullName = (date) => {
	date = new Date(date)
	var dayName = fullListDayOfWeek[date.getDay()],
	day = date.getDate(),
	month = listMonths[date.getMonth()],
	year = date.getFullYear()

	return dayName + ', ' + day + ' ' + month + ' ' + year
}

export { generateListWeek, getDayName, getFullName, getFirstValidDate, isAllowed };