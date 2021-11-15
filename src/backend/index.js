const { ipcMain } = require('electron');
const chokidar = require('chokidar');
const todo = require('./todo-manager');

ipcMain.on('get-all-active-tasks', (event) => {
  let tasks = [];

  try {
    tasks = todo.getTasks();

    chokidar.watch(todo.paths.todo_folder_path).on('all', (_event, path) => {
      const updatedTasks = todo.getTasks();

      event.reply('get-all-active-tasks', updatedTasks);
    });
  } catch (error) {
    event.reply('get-all-active-tasks', []);
  }

  return event.reply('get-all-active-tasks', tasks);
});

ipcMain.on('get-all-done-tasks', (event) => {
  let tasks = [];

  try {
    tasks = todo.getDone();
    chokidar.watch(todo.paths.todo_folder_path).on('all', (_event, path) => {
      const updatedTasks = todo.getDone();

      event.reply('get-all-done-tasks', updatedTasks);
    });
  } catch (error) {
    event.reply('get-all-done-tasks', []);
  }

  return event.reply('get-all-done-tasks', tasks);
});
