const Project = require("../models/Project");

const get = async (req, res) => {
  let results = await Project.find()
    .select(["color", "title", "active"])
    .where("active", 1)
    .populate("sprints", ["title", "type"]);
  return res.status(201).json(results);
};
const getById = async (req, res) => {
  let results = await Project.findOne({ _id: req.params.id })
    .select(["color", "title", "active", "priority"])
    .populate("sprints");
  return res.status(201).json(results);
};
const store = async (req, res) => {
  let project = await Project.create(req.body);
  return res.status(201).json(project);
};

module.exports = { store, get, getById };
