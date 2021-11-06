import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineFlag, AiFillTag } from 'react-icons/ai';
import { BsCalendar4Week } from 'react-icons/bs';

import TextareaAutosize from 'react-autosize-textarea';
import dayjs from 'dayjs';

import './styles.css';

interface ModalAddTaskProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const backdrop = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 15 },
};

const ModalAddTask: React.FC<ModalAddTaskProps> = ({
  showModal,
  setShowModal,
}) => {
  const [task, setTask] = useState<string>('');

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop d-flex align-items-center justify-content-center"
          variants={backdrop}
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
                placeholder={`(C) Organize comic book collection +geek @home due:${dayjs()
                  .add(10, 'days')
                  .format('YYYY-MM-DD')}`}
              />
            </div>
            <div className="footer">
              <AiOutlineFlag size={20} />
              <AiFillTag size={20} />
              <BsCalendar4Week size={20} />
            </div>
          </div>
          <button type="button" onClick={() => setShowModal(false)}>
            close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ModalAddTask.defaultProps = {
//   setShowModal: () => {},
// };

export default ModalAddTask;
