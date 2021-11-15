/* eslint-disable no-constant-condition */
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import relativeTime from 'dayjs/plugin/relativeTime';
import calendar from 'dayjs/plugin/calendar';
import updateLocale from 'dayjs/plugin/updateLocale';
import isToday from 'dayjs/plugin/isToday';
import { WeekCalendar, AddTaskButton } from '../../components';

dayjs.extend(relativeTime);
dayjs.extend(calendar);
dayjs.extend(isToday);
dayjs.extend(updateLocale);

const Upcoming: React.FC = () => {
  const { t } = useTranslation();

  const [selectedDate, setSelectedDate] = useState<Date>(
    dayjs().add(1, 'day').toDate()
  );

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
      <div style={{ height: 10 }} />
      <motion.div
        key={String(selectedDate)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div style={{ height: 15 }} />
        <h5>
          {t('pages.upcoming.tasksNumberInfo.tasksInfo', { numberOfTasks: 4 })}{' '}
          {[1, 2, 3, 4].length === 1
            ? t('pages.upcoming.tasksNumberInfo.oneTask')
            : t('pages.upcoming.tasksNumberInfo.moreTasks')}{' '}
          {getRelativeTime()}
        </h5>
        <div style={{ height: 15 }} />
        <div style={{ height: 15 }} />
        <AddTaskButton />
      </motion.div>
    </motion.div>
  );
};

export default Upcoming;
