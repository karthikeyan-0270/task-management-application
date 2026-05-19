import React from "react";

export default function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
  setEditingTask,
}) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No Tasks Available</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="task-card"
          >
            <div>
              <h2
                className={`text-xl font-semibold ${
                  task.completed ? "line-through text-green-600" : ""
                }`}
              >
                {task.title}
              </h2>
              <p className="text-gray-600">{task.description}</p>
            </div>

            <div className="btn-group">
              <button
                onClick={() => toggleComplete(task.id)}
                className="complete-btn"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                onClick={() => setEditingTask(task)}
                className="edit-btn"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

