const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);

module.exports = {
  dueDateParser: (data) => {
    const match = data.original.match(/(due:[0-9]{4}-[0-9]{2}-[0-9]{2})/);

    if (match !== null) {
      const cleanDateString = match[1].replace('due:', '');

      data.dueDate = dayjs(cleanDateString, 'YYYY-MM-DD').toDate();
      data.residue = data.residue.replace(match[1], '');
    } else {
      data.dueDate = null;
    }
  },
  timeParser: (data) => {
    const match = data.original.match(/(time:[0-9]{2}:[0-9]{2})/);

    if (match !== null) {
      const cleanTimeString = match[1].replace('time:', '');
      data.time = dayjs(cleanTimeString, 'HH:mm').toDate();
      data.residue = data.residue.replace(match[1], '');
    } else {
      data.time = null;
    }
  },
};
