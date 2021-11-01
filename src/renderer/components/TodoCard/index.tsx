import React from 'react';
import { BiCheck } from 'react-icons/bi';
import { HiOutlineCalendar } from 'react-icons/hi';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

import './styles.css';

interface TodoCardProps {
  title: string;
  done: boolean;
  priority: string;
  duedate: Date;
}

dayjs.extend(calendar);

const TodoCard: React.FC<TodoCardProps> = ({
  title,
  done,
  priority,
  duedate,
}) => {
  const getPriorityStyle = (LetterOfPriority: string) => {
    switch (LetterOfPriority) {
      case 'A':
        return {
          backgroundColor: '#ff9090',
          borderColor: '#ff4040',
          iconColor: '#FFF',
        };
      case 'B':
        return {
          backgroundColor: '#8d6955',
          borderColor: '#5a4336',
          iconColor: '#FFF',
        };
      case 'C':
        return {
          backgroundColor: '#9dba6c',
          borderColor: '#80a04b',
          iconColor: '#FFF',
        };
      default:
        return {
          backgroundColor: '#ff9090',
          borderColor: '#ff4040',
          iconColor: '#FFF',
        };
    }
  };

  const getTimeStatus = (duedatetime: Date) => {
    const duedateTask = dayjs(duedatetime);

    if (!dayjs().isBefore(duedateTask)) {
      return {
        color: '#ff4040',
        isOld: true,
      };
    }

    return {
      color: '#80a04b',
      isOld: false,
    };
  };

  return (
    <div>
      <div className="divider" />
      <div className="todo-card-container d-flex align-items-center">
        <div
          style={{
            backgroundColor: done
              ? getPriorityStyle(priority).backgroundColor
              : '',
            borderColor: getPriorityStyle(priority).borderColor,
          }}
          className="check-container d-flex align-items-center justify-content-center"
        >
          {done && (
            <BiCheck size={25} color={getPriorityStyle(priority).iconColor} />
          )}
        </div>
        <div style={{ width: 10 }} />
        <span
          style={{
            textDecoration: done ? 'line-through' : '',
            color: done ? '#0004' : '',
          }}
        >
          {title}
        </span>
      </div>
      <div className="d-flex align-items-center">
        <HiOutlineCalendar color={getTimeStatus(duedate).color} />
        <span
          className="duedate-day"
          style={{
            color: getTimeStatus(duedate).color,
          }}
        >
          {getTimeStatus(duedate).isOld
            ? dayjs(duedate).calendar()
            : dayjs(duedate).format('HH:mm')}
        </span>
      </div>
      <div className="divider" />
    </div>
  );
};

export default TodoCard;
