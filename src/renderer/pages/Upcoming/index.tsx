import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import calendar from 'dayjs/plugin/calendar';
import updateLocale from 'dayjs/plugin/updateLocale';
import { motion } from 'framer-motion';

import { WeekCalendar, TodoCard } from '../../components';

dayjs.extend(relativeTime);
dayjs.extend(calendar);
dayjs.extend(updateLocale);

const Upcoming: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const getRelativeTime = () => {
    dayjs.updateLocale('en', {
      calendar: {
        lastDay: '[Yesterday]', // Tomorrow
        sameDay: '[Today]',
        nextDay: '[Tomorrow]', // Yesterday
        lastWeek: '[last] dddd',
        nextWeek: '[next] dddd',
        sameElse: 'dddd',
      },
    });

    return dayjs(selectedDate).calendar();
  };

  const oldTasks = [
    {
      id: 1,
      title: 'Design a prototype',
      done: false,
      priority: 'A',
      duedate: new Date(2021, 9, 31),
    },
  ];

  const tasks = [
    {
      id: 2,
      title: 'Organize photo shoot',
      done: true,
      priority: 'B',
      duedate: new Date(2021, 10, 31),
    },
    {
      id: 3,
      title: 'Send tax return',
      done: true,
      priority: 'C',
      duedate: new Date(2021, 11, 20),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h2>{dayjs(selectedDate).format('MMMM YYYY')}</h2>
      <WeekCalendar
        selectedDate={selectedDate}
        onChangeDate={setSelectedDate}
      />
      <div style={{ height: 30 }} />
      <h5>Overdue</h5>
      {oldTasks.map((task) => (
        <TodoCard
          key={task.id}
          priority={task.priority}
          done={task.done}
          title={task.title}
          duedate={task.duedate}
        />
      ))}
      <div style={{ height: 15 }} />
      <h5>
        {getRelativeTime()} - {dayjs(selectedDate).format('DD MMM')}
      </h5>
      <div style={{ height: 15 }} />
      {tasks.map((task) => (
        <TodoCard
          key={task.id}
          priority={task.priority}
          done={task.done}
          title={task.title}
          duedate={task.duedate}
        />
      ))}
      <div style={{ height: 15 }} />
    </motion.div>
  );
};

export default Upcoming;
