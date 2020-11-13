const Project = require("../models/Project");
const Sprint = require("./../models/Sprint");

const get = async (req, res) => {
  const sprints = await Sprint.find()
    .populate("tasks",[
        'title',
        'progress',
        'state',
        'type',
        'date',
        'url',
      ])
    // .populate('project')
    .select(["color", "title", "active", "priority", "progress"]);
  return res.status(201).json(sprints);
};

const getById = async (req, res) => {
  const sprint = await Sprint.findOne({ _id: req.params.id })
    .populate("tasks")
    .populate("project");
  return res.status(201).json(sprint);
};

const store = async (req, res) => {
  let sprint = new Sprint(req.body);
  await sprint.save(async (err, res) => {
    let project = await Project.findById(req.body.project);
    let sprints = project.sprints.concat(res._id);
    project.sprints = sprints;
    project.save();
  });
  return res.status(201).json(sprint);

};

module.exports = { get, getById, store };
