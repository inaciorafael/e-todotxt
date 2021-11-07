const { getTodoTasks, getDoneTasks } = require('./src/utils');
const CONSTANTS = require('./src/constants');

const paths = {
  todo_txt_path: CONSTANTS.TODO_TXT_FILE_PATH,
  done_txt_path: CONSTANTS.DONE_TXT_FILE_PATH,
  todo_folder_path: CONSTANTS.TODO_FOLDER_PATH,
};

function getTasks() {
  const tasks = getTodoTasks();
  return tasks;
}

function getDone() {
  const done = getDoneTasks();
  return done;
}

function pickTaskByPriority(priorityLetter) {
  let tasks = getTasks();
  tasks = tasks.filter((task) => task.priority === priorityLetter);

  return tasks;
}

module.exports = { getTasks, getDone, pickTaskByPriority, paths };
