import Sticky from './basic/Sticky';

import Location from './component/Location';
import Calendar from './component/Calendar';
import MealTime from './component/MealTime';
import DateLabel from './component/DateLabel';
import Foods from './component/Foods';
import Cart from './component/Cart';
import LocationModal from './component/LocationModal';

function App() {
  return (
    <div>
    	<Sticky top padding="16px">
	      <Location />
	      <Calendar />
	      <MealTime />
    	</Sticky>
      <DateLabel />
      <Foods />
      <Cart />
      <LocationModal />
    </div>
  );
}

export default App;
