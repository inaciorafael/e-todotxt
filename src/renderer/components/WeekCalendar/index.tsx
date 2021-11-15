import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import './styles.css';

interface WeekCalendarProps {
  onChangeDate: (clickedDate: Date) => void;
  selectedDate: Date;
}

const WEEKEND_DAYS_NUMBERS = [0, 6]; // Sat - 6, Sun - 0

const WeekCalendar: React.FC<WeekCalendarProps> = ({
  onChangeDate,
  selectedDate,
}) => {
  const [weekdays, setWeekDays] = useState<Date[]>([]);
  const tomorrow = dayjs().add(1, 'day');

  const getWeekDays = () => {
    const weekdayslist = Array.from({ length: 7 })
      .map((_, index) => index)
      .map((number) => dayjs(tomorrow).add(number, 'days').toDate());

    setWeekDays(weekdayslist);
  };

  const isWeekend = (date: Date) => {
    return WEEKEND_DAYS_NUMBERS.includes(dayjs(date).day());
  };

  useEffect(() => {
    getWeekDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <span
              style={{
                color: isWeekend(dateObj) ? '#ed5269' : '',
              }}
              className="weekday-name"
            >
              {dayjs(dateObj).format('ddd')}
            </span>
            <span
              style={{
                color: isWeekend(dateObj) ? '#ed5269' : '',
              }}
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
