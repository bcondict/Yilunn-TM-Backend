import mongoose from "mongoose"

const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)
export const Task = mongoose.model("task", taskSchema);
