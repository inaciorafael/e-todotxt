const { getTodoTasks, getDoneTasks } = require('./src/utils');

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

module.exports = { getTasks, getDone, pickTaskByPriority };
