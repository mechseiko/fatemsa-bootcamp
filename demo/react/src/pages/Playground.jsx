// FILE: src/pages/Playground.jsx | SESSION 7
// TEACHES: STATE (data that changes and makes the screen update) and useEffect.
import { useState, useEffect } from "react";

function Playground() {
  // useState gives us a value AND a function to change it. When it changes, React redraws the screen.
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(["Learn React"]);
  const [newTask, setNewTask] = useState("");

  // useEffect runs code AFTER the screen draws. Here it updates the browser tab title whenever count changes.
  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]); // the [count] list means: only run again when count changes

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]); // make a NEW array with the old tasks plus the new one
    setNewTask("");
  }

  return (
    <main className="page">
      <h1>Playground</h1>

      <section className="card">
        <h2>Counter (state)</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add one</button>
      </section>

      <section className="card">
        <h2>Live greeting (controlled input)</h2>
        {/* The input's value comes FROM state, and typing updates state. */}
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        <p>Hello, {name || "stranger"}!</p>
      </section>

      <section className="card">
        <h2>To-do list (state with an array)</h2>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New task" />
        <button onClick={addTask}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Playground;
