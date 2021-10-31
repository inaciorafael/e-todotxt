import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './styles.css';
import data from './data';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  console.log(pathname);

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
          className={`item-container d-flex flex-direction-row align-items-center mb-1 ${
            pathname === item.route ? 'active' : ''
          }`}
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
