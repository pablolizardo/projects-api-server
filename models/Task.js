const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  title: { type: String, required: true },
  progress: { type: Number,  default : 0},
  state: { type: String, default: "dev" },
  type: { type: String, default: "dev" },
  date : { type: Date },
  url: { type: String },
  sprint: { type: Schema.Types.ObjectId, ref: "Sprint" },
});

module.exports = mongoose.model("Task", TaskSchema);
