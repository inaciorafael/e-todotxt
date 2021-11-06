import React from 'react';
import { BsCalendar2Week } from 'react-icons/bs';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import isToday from 'dayjs/plugin/isToday';
import relativeTime from 'dayjs/plugin/relativeTime';
import isBetween from 'dayjs/plugin/isBetween';

import './styles.css';

interface TodoCardProps {
  title: string;
  done?: boolean;
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
  done,
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

  const notify = () =>
    toast.success('Successfully created!', {
      position: 'bottom-right',
    });

  return (
    <motion.div className={`${done ? 'done-container' : ''}`}>
      <button
        type="button"
        onClick={notify}
        className="card-container"
        style={{
          borderLeftColor: getPriorityStyle(priority),
        }}
      >
        <div>
          <span
            style={{
              textDecoration: done ? 'line-through' : '',
            }}
            className="title-card"
          >
            {title}
          </span>
          <span
            style={{
              backgroundColor: getPriorityStyle(priority),
            }}
            className="priority-card"
          >
            {priority}
          </span>
          {project &&
            project?.length > 0 &&
            project?.map((projectName) => (
              <span className="project-card">{projectName}</span>
            ))}
          {context &&
            context.length > 0 &&
            context.map((contextName) => (
              <span className="context-card">{contextName}</span>
            ))}
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
      </button>
      <Toaster />
    </motion.div>
  );
};

TodoCard.defaultProps = {
  project: null,
  context: null,
  duedate: null,
  priority: 'Z',
  done: false,
};

export default TodoCard;
