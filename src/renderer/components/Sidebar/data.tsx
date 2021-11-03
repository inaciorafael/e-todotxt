import { FiInbox } from 'react-icons/fi';
import { BsCalendar } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';
import { AiOutlineFileDone } from 'react-icons/ai';
import dayjs from 'dayjs';

const today = 4;
const upcoming = 27;
const all = today + upcoming;

export default [
  {
    id: 1,
    icon: <FiInbox color="#4877f4" size={15} />,
    title: 'All',
    route: '/all',
    badge: all,
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
    badge: today,
  },
  {
    id: 3,
    icon: <GoCalendar color="#710070" size={15} />,
    title: 'Upcoming',
    route: '/',
    badge: upcoming,
  },
  {
    id: 4,
    icon: <AiOutlineFileDone color="#4e4f53" size={15} />,
    title: 'Done',
    route: '/done',
    badge: 0,
  },
];
