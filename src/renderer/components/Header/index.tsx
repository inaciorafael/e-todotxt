import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosNotifications, IoIosSettings } from 'react-icons/io';
import { RiTodoFill } from 'react-icons/ri';

import HeaderInput from '../HeaderInput';

import './styles.css';

const HeaderContainer = styled.div`
  background-color: #516477;
  width: 100%;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer className="d-flex align-items-center justify-content-between p-2">
      <div className="d-flex flex-direction-row align-items-center">
        <HeaderInput />
      </div>
      <div className="d-flex flex-direction-row align-items-center justify-content-between buttons-container">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="d-flex align-items-center"
        >
          <AiOutlinePlus className="icon-btn" size={20} color="#FFF" />
        </motion.div>
        <div className="d-flex flex-direction-row align-items-center">
          <RiTodoFill size={20} color="#FFF" />
          <div style={{ width: 3 }} />
          <span className="count">2/5</span>
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="d-flex align-items-center"
        >
          <IoIosNotifications className="icon-btn" size={20} color="#FFF" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="d-flex align-items-center"
        >
          <IoIosSettings className="icon-btn" size={20} color="#FFF" />
        </motion.div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
