import { FiInbox } from 'react-icons/fi';
import { BsCalendar } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';
import dayjs from 'dayjs';

export default [
  {
    id: 1,
    icon: <FiInbox color="blue" size={20} />,
    title: 'All',
    route: '/all',
  },
  {
    id: 2,
    icon: (
      <div className="calendar-icon-container">
        <BsCalendar color="green" size={20} />
        <span className="calendar-date">{dayjs().format('DD')}</span>
      </div>
    ),
    title: 'Today',
    route: '/today',
  },
  {
    id: 3,
    icon: <GoCalendar color="purple" size={20} />,
    title: 'Upcoming',
    route: '/',
  },
  {
    id: 4,
    icon: <FiInbox color="#7991B4" size={20} />,
    title: 'Important',
    route: '/inbox',
  },
];
