module.exports = {
  dueDateParser: (data) => {
    const match = data.original.match(/(due:[0-9]{4}-[0-9]{2}-[0-9]{2})/);

    if (match !== null) {
      data.dueDate = new Date(match[1].replace('due:', ''));
      data.residue = data.residue.replace(match[1], '');
    } else {
      data.dueDate = null;
    }
  },
  timeParser: (data) => {
    const match = data.original.match(/(time:[0-9]{2}:[0-9]{2})/);

    if (match !== null) {
      data.time = match[1].replace('time:', '');
      data.residue = data.residue.replace(match[1], '');
    } else {
      data.time = null;
    }
  },
};
