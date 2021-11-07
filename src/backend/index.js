const { ipcMain } = require('electron');
const chokidar = require('chokidar');
const todo = require('./todo-manager');

ipcMain.on('get-all-tasks', (event) => {
  let tasks = [];

  try {
    tasks = todo.getTasks();

    chokidar.watch(todo.paths.todo_folder_path).on('change', (eventC, path) => {
      const updatedTasks = todo.getTasks();

      event.reply('get-all-tasks', updatedTasks);
      console.log(eventC, path);
    });
  } catch (error) {
    event.reply('get-all-tasks', []);
  }

  return event.reply('get-all-tasks', tasks);
});

ipcMain.on('get-all-done', (event) => {
  let tasks = [];

  try {
    tasks = todo.getDone();
  } catch (error) {
    event.reply('get-all-done', []);
  }

  return event.reply('get-all-done', tasks);
});
