import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import './styles.css';

const WeekCalendar: React.FC = () => {
  const [weekdays, setWeekDays] = useState<Date[]>([]);

  const getWeekDays = () => {
    const weekdayslist = Array.from({ length: 7 })
      .map((_, index) => index)
      .map((number) => dayjs().add(number, 'days').toDate());

    setWeekDays(weekdayslist);
  };

  useEffect(() => {
    getWeekDays();
  }, []);

  return (
    <div className="weekcalendar-container">
      {weekdays.length > 0 &&
        weekdays.map((dateObj) => (
          <div className="day-container">
            <span className="weekday-name">{dayjs(dateObj).format('ddd')}</span>
            <span className="weekday-name">{dayjs(dateObj).format('DD')}</span>
          </div>
        ))}
    </div>
  );
};

export default WeekCalendar;
