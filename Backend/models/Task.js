const mongoose = require("mongoose");

module.exports = mongoose.model("Task", new mongoose.Schema({
  title: String,
  description: String,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["Pending","In Progress","Completed"], default:"Pending" },
  dueDate: Date
}));