import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './styles.css';
import data from './data';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const goToSidebarItem = (link: string) => {
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
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
