import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { parseISO, isWithinInterval } from 'date-fns';

export const MyCalendar = () => {

  const [value, setValue] = useState(null);
  const [disabledRanges, setDisabledRanges] = useState([]);

  useEffect(() => {
    const datesString = localStorage.getItem('dates');
    if (datesString) {
      const parsedDates = JSON.parse(datesString);
      setDisabledRanges((prevItems) => [...prevItems, parsedDates]);
    } else {
      console.log("Not dates available");
    }
  }, [value]);

  const resetCalendar = () => {
    setValue(null);
    setDisabledRanges([]);
  }

  const handleDateChange = (dateRange) => {
    console.log(dateRange);
    let dateObjects = {
      start: dateRange[0].toISOString(),
      end: dateRange[1].toISOString()
    };
  
    let datesString = JSON.stringify(dateObjects); // convertir a cadena
    localStorage.setItem('dates', datesString);
  
    setValue(dateRange);
    setDisabledRanges((prevItems) => [...prevItems, dateObjects]);
  };

  const isDateDisabled = ({ date }) => {
    return disabledRanges.some((range) =>
      isWithinInterval(date, { start: new Date(range.start), end: new Date(range.end) })
    );
  };
  return (
    <div className='calendar'>
      <Calendar onChange={handleDateChange}
        value={value}
        minDate={new Date()}
        defaultView={"year"}
        selectRange={true}
        maxDetail={'year'}
        returnValue="range"
        tileDisabled={isDateDisabled} //Not working yet
      // defaultValue={[new Date().getDate + 1, new Date().getDate + 2]}
      />
      <button onClick={resetCalendar} >Reset Calendar</button>
      <p>Reserva tus fechas</p>
    </div>
  )
}
