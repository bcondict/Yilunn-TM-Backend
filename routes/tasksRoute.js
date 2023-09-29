import express from 'express';
import { Task } from '../models/taskModel.js';

const router = express.Router()

// Route for save a new Task
router.post('/', async (request, response) => {
  try {
    if (
        !request.body.name ||
        !request.body.dateEnd
      ) {
      return response.status(400).send({
        message: "Task name can not be empty"
      })
    }

    const newTask = {
      name: request.body.name,
      description: request.body.description,
      dateEnd: request.body.dateEnd,
      dateStart: request.body.dateStart,
    };

    const task = await Task.create(newTask);

    return response.status(201).send(task);
  }
  catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message});
  }
})

// Route for get all tasks
router.get('/', async (request, response) => {
  try {
    const tasks = await Task.find({});
    
    return response.status(200).json({
      count: tasks.length,
      data: tasks
    })
  }
  catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message})
  }
})

// Route for get a single task
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const task = await Task.findById(id);
    
    return response.status(200).json(task)
  }
  catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message})
  }
})

// Route for update a single task
router.put('/:id', async (request, response) => {
  try {
    if (!request.body.task) {
      return response.status(400).send({
        message: "Task name can not be empty"
      })
    }

    const { id } = request.params;

    const result = await Task.findByIdAndUpdate(id, request.body)
    if (!result) {
      return response.status(404).send({ message: "Task not found" })
    }

    return response.status(200).send({ message: "Task updated successfully" })
  }
  catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message })
  }
})

// Route for delete a single task
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Task.findByIdAndDelete(id, request.body)
    if (!result) {
      return response.status(404).send({ message: "Task not found" })
    }

    return response.status(200).send({ message: "Task deleted successfully" })
  }
  catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message })
  }
})

export default router;
