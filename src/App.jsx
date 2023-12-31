import { useState } from "react";
import KPDatePicker from "./KPDatePicker";
import { useWindowSize } from './hooks';
import { registerLocale } from 'react-datepicker';
import ru from "date-fns/locale/ru";

registerLocale("ru", ru);

// helpers
const addZeroToDate = (str) => {
	if (`${str}`.length === 1) return `0${str}`
	return str
}
const fromStrToDate = (str) => {
	if (!str) return str
	const dateStr = str.split('-')
	return new Date(dateStr[0], dateStr[1] - 1, dateStr[2])
}
const fromDateToStr = (date) => {
	return `${date.getFullYear()}-${addZeroToDate(date.getMonth() + 1)}-${addZeroToDate(date.getDate())}`
}

function App() {
	const size = useWindowSize()
	const [dateIn, setDateIn] = useState(fromDateToStr(new Date()))
	const [dateOut, setDateOut] = useState(fromDateToStr(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)))
	const [rangeDatePickerOpen, setRangeDatePickerOpen] = useState(false)

	const toggleRangeDatePicker = () => setRangeDatePickerOpen(!rangeDatePickerOpen)
	const closeDateRangePicker = () => setRangeDatePickerOpen(false)

	const setDatesRange = (start, end) => {
		if (dateIn && dateOut) {
			setDateOut(undefined)
		}
		setDateIn(fromDateToStr(start))
		if (end) {
			setDateOut(fromDateToStr(end))
			closeDateRangePicker()
		}
	}

	const rangeMounthNumber = size.width < 768 ? 1 : 2;

	return (
		<div className="App">
			<p
				className="date"
				onClick={toggleRangeDatePicker}
			>{dateIn}</p>
			<p
				className="date"
				onClick={toggleRangeDatePicker}
			>{dateOut}</p>
			{rangeDatePickerOpen && <KPDatePicker
				setDates={setDatesRange}
				startDate={fromStrToDate(dateIn)}
				endDate={fromStrToDate(dateOut)}
				close={closeDateRangePicker}
				monthsShown={rangeMounthNumber}
			/>}
		</div>
	);
}

export default App;
