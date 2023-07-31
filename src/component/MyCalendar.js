import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isWithinInterval } from 'date-fns';
import { useUser } from './UserContext';
import { TooltipError } from '../enum/MessageError';
import '../css/Calendar.css'

export const MyCalendar = () => {

  const [value, setValue] = useState(null);
  const [datesString, setDatesString] = useState(null);
  const [disabledRanges, setDisabledRanges] = useState([]);
  const [showTooltip, setShowTooltip] = useState([]);
  const { user } = useUser();

  //Fills in Local Storage Dates
  useEffect(() => {
    setDatesString(localStorage.getItem('dates'));
  }, []);

  //Sets up DisabledRanges state
  useEffect(() => {
    //TODO get values from server

    if (datesString) {
      const parsedDates = JSON.parse(datesString);
      setDisabledRanges((prevItems) => [...prevItems, parsedDates]);
    } else {
      console.log("Not dates available");
    }
  }, [value, datesString]);

  //Toogles User login Tooltip
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip((prevState) => ({
          ...prevState,
          active: false,
        }));
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showTooltip]);

  const resetCalendar = () => {
    setValue(null);
    setDisabledRanges([]);
  }

  const handleDateChange = (dateRange) => {
    if (!user) {
      let tooltipObject = {
        name: TooltipError.TOOLTIP_BOOKING_ERROR,
        active: true,
        message: "Inicia sesión para reservar"
      }

      setShowTooltip(tooltipObject);
      return;
    }
    generateBooking(dateRange);
  };

  const generateBooking = (dateRange) => {
    let dateObjects = {
      start: dateRange[0].toISOString(),
      end: dateRange[1].toISOString()
    };

    const dateRangeJSON = JSON.stringify(dateObjects);
    setDatesString(dateRangeJSON);
    localStorage.setItem('dates', dateRangeJSON);

    setValue(dateRange);
  }

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
      {(showTooltip.active && showTooltip.name === TooltipError.TOOLTIP_BOOKING_ERROR) && <span className="tooltip">{showTooltip.message}</span>}
      <button onClick={resetCalendar} >Reset Calendar</button>
      <p>Reserva tus fechas</p>
    </div>
  )
}
