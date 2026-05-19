
import React from "react";

export default function TaskForm({ addTask, editingTask }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    const task = {
      id: editingTask ? editingTask.id : Date.now(),
      title,
      description,
      completed: editingTask ? editingTask.completed : false,
    };

    addTask(task);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="input-group">
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-xl"
        />

        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3 rounded-xl"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="add-btn"
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
}