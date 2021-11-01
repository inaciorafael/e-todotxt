import { FiInbox } from 'react-icons/fi';
import { BsCalendar } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';
import dayjs from 'dayjs';

export default [
  {
    id: 1,
    icon: <FiInbox color="#4877f4" size={15} />,
    title: 'All',
    route: '/all',
  },
  {
    id: 2,
    icon: (
      <div className="calendar-icon-container">
        <BsCalendar color="#006729" size={15} />
        <span className="calendar-date">{dayjs().format('DD')}</span>
      </div>
    ),
    title: 'Today',
    route: '/today',
  },
  {
    id: 3,
    icon: <GoCalendar color="#710070" size={15} />,
    title: 'Upcoming',
    route: '/',
  },
  {
    id: 4,
    icon: <FiInbox color="#7991B4" size={15} />,
    title: 'Important',
    route: '/inbox',
  },
];
