import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import './styles.css';

interface AddTaskButtonProps {
  onClick: () => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="add-button d-flex align-items-center"
    >
      <AiOutlinePlus size={20} color="#ed5269" />
      <span className="add-text">Add task</span>
    </button>
  );
};

export default AddTaskButton;
