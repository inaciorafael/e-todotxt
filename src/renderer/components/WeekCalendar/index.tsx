import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import './styles.css';

interface WeekCalendarProps {
  onChangeDate: (clickedDate: Date) => void;
  selectedDate: Date;
}

const WeekCalendar: React.FC<WeekCalendarProps> = ({
  onChangeDate,
  selectedDate,
}) => {
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
          <button
            type="button"
            onClick={() => onChangeDate(dateObj)}
            key={String(dateObj)}
            className={`day-container ${
              dayjs(dateObj).isSame(dayjs(selectedDate), 'date')
                ? 'day-active'
                : ''
            }`}
          >
            <span className="weekday-name">{dayjs(dateObj).format('ddd')}</span>
            <span
              className={`weekday-name ${
                dayjs(dateObj).isSame(dayjs(selectedDate), 'date')
                  ? 'day-number-active'
                  : ''
              }`}
            >
              {dayjs(dateObj).format('DD')}
            </span>
            {dayjs(dateObj).isSame(dayjs(selectedDate), 'date') && (
              <div className="have-task-dot" />
            )}
          </button>
        ))}
    </div>
  );
};

export default WeekCalendar;
