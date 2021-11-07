const fs = require('fs');
const { Parser } = require('todo-parser');

const CONSTANTS = require('../constants');
const { dueDateParser, timeParser } = require('../extras/extraParse');

const TodoParser = new Parser();
TodoParser.register(dueDateParser);
TodoParser.register(timeParser);

function parseTask(task) {
  return {
    ...TodoParser.parse(task),
  };
}

module.exports = {
  getTodoTasks: () => {
    let tasks = fs
      .readFileSync(CONSTANTS.TODO_TXT_FILE_PATH)
      .toString()
      .split('\n');
    tasks = tasks.map((task, index) => ({
      ...parseTask(task),
      key: index + 1,
    }));
    tasks = tasks.filter((task) => task.original);

    return tasks.length > 0 ? tasks : [];
  },
  getDoneTasks: () => {
    let done = fs
      .readFileSync(CONSTANTS.DONE_TXT_FILE_PATH)
      .toString()
      .split('\n');
    done = done.map((task, index) => ({
      ...parseTask(task),
      key: index + 1,
    }));
    done = done.filter((task) => task.original);

    return done.length > 0 ? done : [];
  },
};
