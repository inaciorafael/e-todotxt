import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './styles.css';
import data from './data';
import SearchActions from '../../store/ducks/search';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();

  const goToSidebarItem = (link: string) => {
    dispatch(SearchActions.addPageForGoBack(link));
    history.push(link);
  };

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
