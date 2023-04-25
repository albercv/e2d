import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isWithinInterval } from 'date-fns';

export const MyCalendar = () => {

  const [value, setValue] = useState(null);
  const [datesString, setDatesString] = useState(null);
  const [disabledRanges, setDisabledRanges] = useState([]);

  useEffect(() => {
    setDatesString(localStorage.getItem('dates'));
  }, []);

    useEffect(() => {
    //TODO get values from server
    
    if (datesString) {
      const parsedDates = JSON.parse(datesString);
      setDisabledRanges((prevItems) => [...prevItems, parsedDates]);
    } else {
      console.log("Not dates available");
    }
  }, [value, datesString]);

  const resetCalendar = () => {
    setValue(null);
    setDisabledRanges([]);
  }

  const handleDateChange = (dateRange) => {
    let dateObjects = {
      start: dateRange[0].toISOString(),
      end: dateRange[1].toISOString()
    };

    const dateRangeJSON = JSON.stringify(dateObjects);
    setDatesString(dateRangeJSON);
    localStorage.setItem('dates', dateRangeJSON);
  
    setValue(dateRange);
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
      />
      <button onClick={resetCalendar} >Reset Calendar</button>
      <p>Reserva tus fechas</p>
    </div>
  )
}
