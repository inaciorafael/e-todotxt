import React from 'react';
// import { BiCheck } from 'react-icons/bi';
import { BsCalendar2Week } from 'react-icons/bs';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import isToday from 'dayjs/plugin/isToday';
import relativeTime from 'dayjs/plugin/relativeTime';
import isBetween from 'dayjs/plugin/isBetween';

import './styles.css';

interface TodoCardProps {
  title: string;
  // done: boolean;
  priority?: string;
  project?: string[] | null;
  context?: string[] | null;
  duedate?: Date | null;
}

dayjs.extend(calendar);
dayjs.extend(isToday);
dayjs.extend(relativeTime);
dayjs.extend(isBetween);

const TodoCard: React.FC<TodoCardProps> = ({
  title,
  priority = 'Z',
  project,
  context,
  duedate,
}) => {
  const getPriorityStyle = (LetterOfPriority: string) => {
    switch (LetterOfPriority) {
      case 'A':
        return '#ff829b';
      case 'B':
        return '#fdbcb1';
      case 'C':
        return '#ffeead';
      default:
        return '#F0F0F0';
    }
  };

  // const getProjectName = (todotask: string) => {
  //   // const project = todotask.replace(/(\+[^\s].[A-Za-z0-9]+)/gim, '{$1}');

  //   return project || false;
  // };

  const getDueDateFormat = (date: Date) => {
    if (dayjs(date).isToday() && dayjs(date).isAfter(dayjs())) {
      return {
        color: '#3a925e',
        displayDate: dayjs(date).format('HH:mm a'),
      };
    }

    if (dayjs(date).isBetween(dayjs(), dayjs().add(6, 'days'))) {
      return {
        color: '#3a925e',
        displayDate: dayjs(date).calendar(),
      };
    }

    if (dayjs(date).isBefore(dayjs())) {
      return {
        color: '#ed5269',
        displayDate: dayjs().to(dayjs(date)),
      };
    }

    return {
      color: '#3a925e',
      displayDate: dayjs(date).from(dayjs()),
    };
  };

  return (
    <div
      className="card-container"
      style={{
        borderLeftColor: getPriorityStyle(priority),
      }}
    >
      <div>
        <span className="title-card">{title}</span>
        <span
          style={{
            backgroundColor: getPriorityStyle(priority),
          }}
          className="priority-card"
        >
          {priority}
        </span>
        {project && <span className="project-card">{project}</span>}
        {context && <span className="context-card">{context}</span>}
      </div>
      <div className="d-flex align-items-center">
        {duedate && (
          <>
            <BsCalendar2Week
              size={15}
              color={getDueDateFormat(duedate).color}
            />
            <span
              style={{
                color: getDueDateFormat(duedate).color,
              }}
              className="duedate"
            >
              {getDueDateFormat(duedate).displayDate}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

TodoCard.defaultProps = {
  project: null,
  context: null,
  duedate: null,
  priority: 'Z',
};

export default TodoCard;
