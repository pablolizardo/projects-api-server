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

const update = async (req,res) => {
  let sprint = await Sprint.findOne({ _id: req.params.id})
  // moving case
  if(req.body.start && req.body.end ) { 
    sprint.start = req.body.start
    sprint.end = req.body.end
    await sprint.save()
    return res.status(201).json(sprint)
  }
  return res.status(204).json('no sprint was found')
}

module.exports = { get, getById, store, update };
