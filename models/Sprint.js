const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SprintSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, default: "dev" },
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

module.exports = mongoose.model("Sprint", SprintSchema);
