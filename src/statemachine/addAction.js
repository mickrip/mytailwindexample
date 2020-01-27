let _actions = [];

const addAction = (name, cb) => {
  _actions.push({
    name,
    cb
  });
};

export default addAction;
