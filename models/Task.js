const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  title: { type: String, required: true },
  sprint: { type: Schema.Types.ObjectId, ref: "Sprint" },
});

module.exports = mongoose.model("Task", TaskSchema);
