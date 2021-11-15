import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import Modal from '../ModalAddTask';
import './styles.css';

const AddTaskButton: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="add-button d-flex align-items-center"
      >
        <AiOutlinePlus size={20} color="#ed5269" />
        <span className="add-text">{t('components.taskButton.title')}</span>
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AddTaskButton;
