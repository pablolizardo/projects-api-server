const Sprint = require("../models/Sprint");
const Task = require("../models/Task");

const get = async (req, res) => {
  const tasks = await Task.find({});
  return res.status(201).json(tasks);
};
const store = async (req, res) => {
  let task = await new Task(req.body);
  task.save(async (err, res) => {
    let sprint = await Sprint.findById(req.body.sprint);
    let sprints = sprint.tasks.concat(res._id);
    sprint.tasks = sprints;
    sprint.save();
  });
  return res.status(201).json(task);
};

module.exports = { get, store };
