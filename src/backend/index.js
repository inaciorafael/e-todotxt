const { ipcMain } = require('electron');
const todo = require('./todo-manager');

ipcMain.on('get-all-tasks', (event) => {
  let tasks = [];

  try {
    tasks = todo.getTasks();
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
