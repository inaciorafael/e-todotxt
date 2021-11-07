const os = require('os');

module.exports = {
  TODO_TXT_FILE_PATH: `${os.homedir}/.todo/todo.txt`,
  DONE_TXT_FILE_PATH: `${os.homedir}/.todo/done.txt`,
  TODO_FOLDER_PATH: `${os.homedir}/.todo`,
};
