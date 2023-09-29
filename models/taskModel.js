import mongoose from "mongoose"

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    dateEnd: {
      type: Date,
      required: true,
    },
    dateStart: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)
export const Task = mongoose.model("task", taskSchema);
