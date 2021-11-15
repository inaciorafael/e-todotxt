import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiInbox } from 'react-icons/fi';
import { BsCalendar } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';
import { AiOutlineFileDone } from 'react-icons/ai';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';
import SearchActions from '../../store/ducks/search';
import {
  selectActiveTasksNumber,
  selectDoneTasksNumber,
} from '../../store/ducks/selectors';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();
  const activeTasksNumber = useSelector(selectActiveTasksNumber);
  const doneTasksNumber = useSelector(selectDoneTasksNumber);

  const goToSidebarItem = (link: string) => {
    dispatch(SearchActions.addPageForGoBack(link));
    history.push(link);
  };

  const data = [
    {
      id: 1,
      icon: <FiInbox color="#4877f4" size={15} />,
      title: t('components.sidebar.all'),
      route: '/all',
      badge: activeTasksNumber,
    },
    {
      id: 2,
      icon: (
        <div className="calendar-icon-container">
          <BsCalendar color="#006729" size={15} />
          <span className="calendar-date">{dayjs().format('DD')}</span>
        </div>
      ),
      title: t('components.sidebar.today'),
      route: '/today',
      badge: 0,
    },
    {
      id: 3,
      icon: <GoCalendar color="#710070" size={15} />,
      title: t('components.sidebar.upcoming'),
      route: '/',
      badge: 0,
    },
    {
      id: 4,
      icon: <AiOutlineFileDone color="#4e4f53" size={15} />,
      title: t('components.sidebar.done'),
      route: '/done',
      badge: doneTasksNumber,
    },
  ];

  return (
    <div className="sidebar-container">
      {data.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => goToSidebarItem(item.route)}
          style={{
            backgroundColor: pathname === item.route ? '#FFF' : 'transparent',
          }}
          className="item-container d-flex flex-direction-row align-items-center mb-1"
        >
          {item.icon}
          <div style={{ width: 4 }} />
          <span className="item-title">{item.title}</span>
          {item.badge > 0 && <span className="bagde-number">{item.badge}</span>}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
