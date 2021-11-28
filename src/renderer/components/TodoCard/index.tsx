import React, { useState } from 'react';
import { BsCalendar2Week } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { /* toast, */ Toaster } from 'react-hot-toast';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import isToday from 'dayjs/plugin/isToday';
import relativeTime from 'dayjs/plugin/relativeTime';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import ModalEditTask from '../ModalEditTask';

import './styles.css';

interface TodoCardProps {
  original: string;
  title: string;
  done?: boolean;
  priority?: string;
  project?: string[] | null;
  context?: string[] | null;
  duedate?: Date | null;
  time: string | null;
  completionDate: Date | null;
  // creationDate?: Date | null;
  // id?: number;
}

dayjs.extend(calendar);
dayjs.extend(isToday);
dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

const TodoCard: React.FC<TodoCardProps> = ({
  title,
  priority = '',
  project,
  context,
  duedate,
  done,
  time,
  completionDate,
  original,
  // creationDate,
  // id,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const getPriorityStyle = (LetterOfPriority: string) => {
    if (done) {
      return '#49b675';
    }

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

  const getDueDateFormat = (date: Date) => {
    if (done) {
      return {
        color: '#49b675',
        displayDate: dayjs(completionDate).format('dddd DD MMMM YYYY'),
      };
    }

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

  const showCardDetails = () => {
    setShowModal(true);
  };

  return (
    <motion.div className={`${done ? 'done-container' : ''}`}>
      <button
        type="button"
        onClick={showCardDetails}
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
          {priority && (
            <span
              style={{
                backgroundColor: getPriorityStyle(priority),
              }}
              className="priority-card"
            >
              {priority}
            </span>
          )}
          {project &&
            project?.length > 0 &&
            project?.map((projectName) => (
              <span key={projectName} className="project-card">
                +{projectName}
              </span>
            ))}
          {context &&
            context.length > 0 &&
            context.map((contextName) => (
              <span key={contextName} className="context-card">
                @{contextName}
              </span>
            ))}
        </div>
        <div className="d-flex align-items-center">
          {!done && duedate && (
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
        {completionDate && (
          <div className="d-flex flex-row align-items-center">
            <AiOutlineCheck size={15} color="#49b675" />
            <span
              style={{
                color: '#49b675',
              }}
              className="duedate"
            >
              {dayjs(completionDate).format('dddd DD MMMM YYYY')}
            </span>
          </div>
        )}
        {time && <span>{dayjs(time).format('HH:mm')}</span>}
      </button>
      <ModalEditTask
        original={original}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Toaster position="top-right" />
    </motion.div>
  );
};

TodoCard.defaultProps = {
  project: null,
  context: null,
  duedate: null,
  priority: 'Z',
  done: false,
  // creationDate: null,
  // id: 0,
};

export default TodoCard;
