import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

interface BackButtonProps {
  title: string;
}

const BackButton: React.FC<BackButtonProps> = ({ title }) => {
  const history = useHistory();

  return (
    <div className="d-flex flex-row align-items-center">
      <button
        onClick={() => history.goBack()}
        style={{ padding: 0, paddingRight: 15 }}
        type="button"
      >
        <IoIosArrowBack size={30} />
      </button>
      <h1>{title}</h1>
    </div>
  );
};

export default BackButton;
