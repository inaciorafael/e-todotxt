import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineFlag, AiFillTag } from 'react-icons/ai';
import { BsCalendar4Week, BsCheckLg } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import TextareaAutosize from 'react-autosize-textarea';
import dayjs from 'dayjs';
import { SelectContext, SelectProject } from '..';

import './styles.css';

interface ModalEditTaskProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  original: string;
}

const backdrop = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 15 },
};

const ModalEditTask: React.FC<ModalEditTaskProps> = ({
  showModal,
  setShowModal,
  original,
}) => {
  const { t } = useTranslation();
  const [task, setTask] = useState<string>(original);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveTask = () => {
    toast.success('Task created successfully!', {
      duration: 5000,
    });
    setShowModal(false);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showModal && (
          <motion.div
            className="backdrop d-flex align-items-center justify-content-center"
            variants={backdrop}
            key={String(showModal)}
            animate="visible"
            initial="hidden"
          >
            <div className="add-task-container d-flex justify-content-between flex-column align-items-center">
              <div className="content">
                <div style={{ height: 10 }} />
                <TextareaAutosize
                  maxLength={350}
                  value={task}
                  onChange={(e) => setTask(e.currentTarget.value)}
                  style={{
                    maxHeight: 180,
                    boxSizing: 'border-box',
                    border: 'none',
                    outline: 0,
                    width: '100%',
                  }}
                  placeholder={`${t(
                    'components.modalAddTask.placeholder'
                  )} due:${dayjs()
                    .add(1, 'day')
                    .format('YYYY-MM-DD')} time:12:45`}
                />
              </div>
              <div className="footer d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex flex-row">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <button className="action-btn" type="button">
                      <AiOutlineFlag color="#516477" size={20} />
                    </button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <button className="action-btn" type="button">
                      <SelectProject />
                      <AiFillTag color="#516477" size={20} />
                    </button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <button className="action-btn" type="button">
                      <BsCalendar4Week color="#516477" size={20} />
                    </button>
                  </motion.div>
                </div>
                <div className="d-flex flex-row">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <button
                      onClick={handleCloseModal}
                      style={{ backgroundColor: '#e71837' }}
                      className="action-btn"
                      type="button"
                    >
                      <IoMdClose color="#FFF" size={20} />
                    </button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <button
                      onClick={handleSaveTask}
                      style={{ backgroundColor: '#49b675' }}
                      className="action-btn"
                      type="button"
                    >
                      <BsCheckLg color="#FFF" size={20} />
                    </button>
                  </motion.div>
                </div>
              </div>
              <SelectContext />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Toaster position="bottom-right" /> */}
    </>
  );
};

export default ModalEditTask;
