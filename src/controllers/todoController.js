import todo from "../model/todoModel";

export const createTodo = async (req, res) => {
  try {
    const Todo = await todo.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        Todo,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

export const getTodoById = async (req, res) => {
  console.log(req.params);
  const Todo = await todo.findById(req.params.id);
  if (!Todo) {
    res.status(404).json({
      status: "failed",
      message: "todo not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      Todo,
    },
  });
};

export const updateTodo = async (req, res) => {
  try {
    const Todo = await todo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!Todo) {
      return res.status(404).json({
        status: "failed",
        message: "todo not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        message: "update success",
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
export const getAllTodo = async (req, res) => {
  try {
    const todos = await todo.find();

    res.status(200).json({
      status: "success",
      Numbers: todo.length,
      data: {
        todos,
      },
    });
  } catch (error) {
    res.status(400).json({
      statusbar: "failed",
      error: error,
    });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const Todo = await todo.findByIdAndDelete(req.params.id);
    if (!Todo) {
      return res.status(404).json({
        status: "failed",
        message: "todo not found",
      });
    }
    return res.status(204).json({
      status: "success",
      data: "todo deleted successfuly",
    });
  } catch (error) {
    return res.status(400).json({ status: "failed", error });
  }
};
