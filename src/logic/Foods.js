import Image from '../basic/Image'

import FullStar from '../images/full-star.svg'
import HalfStar from '../images/half-star.svg'
import EmptyStar from '../images/empty-star.svg'

const generateRating = (rate) => {
	var rating = []
  for (var i = 1; i <= 5; i++) {
    rate = parseFloat(rate)
    if (rate >= i) {
      rating.push(<Image src={ FullStar } key={ i } />)
    } else if (rate >= (parseInt(i - 1) + 0.5)) {
      rating.push(<Image src={ HalfStar } key={ i } />)
    } else {
      rating.push(<Image src={ EmptyStar } key={ i } />)
    }
  }

	return rating
}

const moneyFormat = (number, decimal = 0) => {
  var re = '\\d(?=(\\d{3})+' + (decimal > 0 ? '\\.' : '$') + ')';
  return parseInt(number).toFixed(Math.max(0, ~~decimal)).replace(new RegExp(re, 'g'), '$&,');
}

export { generateRating, moneyFormat };