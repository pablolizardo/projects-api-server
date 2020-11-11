const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    color: { type: String, default: "gray" },
    order: { type: Number, default: 0 },
    progress: { type: Number,  default : 0},
    type: { type: String },
    priority: { type: Number, default: 0 },
    active: { type: Number, default: 1 },
    sprints: [
      {
        type: Schema.Types.ObjectId,
        ref: "Sprint",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
