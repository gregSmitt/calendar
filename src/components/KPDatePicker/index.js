import DatePicker from "react-datepicker";
import React, { useEffect, useRef } from 'react';
import './index.scss';
import { ReactComponent as ArrowLeft } from '../../assets/img/ChevronLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/ChevronRight.svg';

const KPDatePicker = ({
	close,
	classMarker,
	setDates,
	startDate,
	endDate,
	maxDate = new Date(2099, 1, 1),
	monthsShown = 1,
	range = true,
	minDate = new Date(),
}) => {
	//   const size = useWindowSize();
	//   const detectOrientation = () =>{
	//     if (size.width < 881) return true;
	//       return false;
	//   }
	const datePickerRef = useRef(null)
	const missClickHandle = (e) => {
		if (e.target.classList.contains(classMarker)) return
		close()
	}
	useEffect(() => {
		markLastMounthDayInRange()
	}, [])
	function markLastMounthDayInRange() {
		if (datePickerRef.current && datePickerRef.current.calendar) {
			const componentNode = datePickerRef.current.calendar.componentNode
			const emptyElementsInRange = Array.from(componentNode.querySelectorAll('.react-datepicker__day--weekend.react-datepicker__day--outside-month'))
			if (emptyElementsInRange.length) {
				emptyElementsInRange.forEach(el => {
					const prevEl = el.previousSibling
					if (prevEl && !prevEl.classList.contains('react-datepicker__day--outside-month')) {
						prevEl.classList.add('kp-last-mounth-day-in-range')
					}
				})
			}
		}
	}

	const renderDayContents = (day, date) => {
		return (
			<>
				<div className="background"></div>
				<span>{date.getDate()}</span>
			</>
		);
	};

	const onChangeDate = (date) => setDates(date)
	const onChangeRange = (dates) => {
		const [start, end] = dates;
		setDates(start, end);
	};
	const handleChangeDate = (data) => {
		if (range) onChangeRange(data)
		else onChangeDate(data)
	}

	return (
		<div className="kp-datepicker">
			<DatePicker
				onClickOutside={missClickHandle}
				onMonthChange={markLastMounthDayInRange}
				onDayMouseEnter={markLastMounthDayInRange}
				renderDayContents={renderDayContents}
				renderCustomHeader={({
					date,
					changeYear,
					changeMonth,
					decreaseMonth,
					increaseMonth,
					prevMonthButtonDisabled,
					nextMonthButtonDisabled,
					customHeaderCount,
					monthDate
				}) => <Header maxDate={maxDate} minDate={minDate} pickerProps={{
					date,
					changeYear,
					changeMonth,
					decreaseMonth,
					increaseMonth,
					prevMonthButtonDisabled,
					nextMonthButtonDisabled,
					customHeaderCount,
					monthDate
				}} />}
				classNameName="ggwp"
				selected={startDate}
				dateFormat="dd.MM.yyyy"
				selectsDisabledDaysInRange={range}
				selectsRange={range}
				onChange={(data) => handleChangeDate(data)}
				maxDate={maxDate}
				startDate={range ? startDate : undefined}
				endDate={range ? endDate : undefined}
				minDate={minDate}
				locale="ru"

				monthsShown={monthsShown}
				inline
				ref={datePickerRef}
			/>
		</div>
	)
}


const Header = ({ pickerProps, maxDate, minDate = new Date() }) => {
	const selectRef = useRef(null)

	const currentYear = minDate.getFullYear()
	const maxYear = maxDate.getFullYear()
	const years = [];
	for (let i = maxYear; i >= currentYear; i--) {
		years.push(i);
	}

	useEffect(() => {
		if (selectRef.current) {
			selectRef.current.value = '';
		}
	}, [])

	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь",
	];
	const {
		changeYear,
		changeMonth,
		decreaseMonth,
		increaseMonth,
		prevMonthButtonDisabled,
		nextMonthButtonDisabled,
		customHeaderCount,
		monthDate
	} = pickerProps;

	return (
		<>
			<button
				aria-label="Previous Month"
				type="button"
				disabled={prevMonthButtonDisabled}
				className={
					"kp-datepicker__navigation kp-datepicker__navigation--previous"
				}
				style={customHeaderCount === 1 ? { display: "none" } : null}
				onClick={decreaseMonth}
			>
				<ArrowLeft />
			</button>
			<button
				type="button"
				aria-label="Next Month"
				disabled={nextMonthButtonDisabled}
				className={
					"kp-datepicker__navigation kp-datepicker__navigation--next"
				}
				style={customHeaderCount === 1 ? { display: "none" } : null}
				onClick={increaseMonth}
			>
				<ArrowRight />
			</button>
			<div className='kp-datepicker__select-month'>
				<p>{`${months[monthDate.getMonth()]} – ${monthDate.getFullYear()}`}</p>
				<select
					ref={selectRef}
					onChange={(e) => {
						const value = e.target.value;
						e.preventDefault()
						changeMonth(`${new Date(Number(value)).getMonth()}`)
						changeYear(`${new Date(Number(value)).getFullYear()}`)
						e.target.value = ''
					}}
				>
					{years.map((option) => (
						<React.Fragment key={`${customHeaderCount}${option}`}>
							<option disabled value={option}>
								{option}
							</option>
							{
								months.slice().reverse().map((mounth, i) => {
									if (minDate > new Date(option, 11 - i + 1) || new Date(option, 11 - i) > new Date(maxDate.getFullYear(), maxDate.getMonth())) {
										return null
									}
									return (
										<option
											key={`${customHeaderCount}${option}${mounth}`}
											value={new Date(option, 11 - i).getTime()}
										>
											{mounth}
										</option>
									)
								})
							}
						</React.Fragment>
					))}
				</select>
			</div>
			<p className="kp-datepicker__current-month">
				{months[monthDate.getMonth()]}
				<span>{monthDate.getFullYear()}</span>
			</p>
		</>
	)
}

export default KPDatePicker