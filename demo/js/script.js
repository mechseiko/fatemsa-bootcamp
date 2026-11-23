// FILE: 03-js/script.js | SESSIONS 3 and 4
// TEACHES: variables, functions, the DOM, events, arrays, fetch and async/await.

// ============================================================
// SECTION 1: JS BASICS (variables, types, function, array, object, loop, if/else)
// ============================================================
function runBasics() {
  const lines = []; // THIS IS AN ARRAY: a list of things. We collect our output lines here.

  // VARIABLES: const = cannot be reassigned. let = can change.
  const name = "Amina";        // a string (text)
  let age = 20;                // a number
  age = age + 1;               // let lets us change it
  const isStudent = true;      // a boolean (true or false)
  lines.push("Name: " + name + ", age: " + age + ", student: " + isStudent);

  // FUNCTION: a reusable block of code. It takes input and can give output.
  function greet(person) {
    return "Hello, " + person + "!";
  }
  lines.push(greet(name));

  // OBJECT: a bundle of related values, written as key: value.
  const course = { title: "Web Dev", sessions: 12 };
  lines.push("Course: " + course.title + " with " + course.sessions + " sessions");

  // LOOP: repeat code. Here we go through each item of an array.
  const topics = ["HTML", "CSS", "JavaScript"];
  for (const topic of topics) {
    lines.push("Topic: " + topic);
  }

  // IF / ELSE: make a decision.
  if (course.sessions >= 10) {
    lines.push("That is a full course!");
  } else {
    lines.push("That is a short course.");
  }

  console.log(lines.join("\n"));  // prints in the browser console (press F12)
  document.getElementById("basics-out").textContent = lines.join("\n"); // prints on the page
}
document.getElementById("basics-btn").addEventListener("click", runBasics);

// ============================================================
// SECTION 2: CLICK COUNTER (DOM + events)
// DOM = the page as JavaScript objects. We find an element, then change it.
// ============================================================
let count = 0;
document.getElementById("count-btn").addEventListener("click", function () {
  count = count + 1;
  document.getElementById("count").textContent = count;
  // TRY THIS (live): change "+ 1" to "+ 5".
});

// ============================================================
// SECTION 3: THEME TOGGLE (classList.toggle)
// ============================================================
document.getElementById("theme-btn").addEventListener("click", function () {
  document.body.classList.toggle("dark"); // adds "dark" if missing, removes it if present
});

// ============================================================
// SECTION 4: LIVE CHARACTER COUNTER ("input" event fires on every keystroke)
// ============================================================
const textBox = document.getElementById("text-box");
textBox.addEventListener("input", function () {
  const length = textBox.value.length;
  const info = document.getElementById("char-info");
  info.textContent = length + " / 100";
  info.style.color = length > 100 ? "red" : "inherit"; // turn red over the limit
});

// ============================================================
// SECTION 5: MINI TO-DO LIST
// The array is the "state". render() redraws the list from the array every time.
// ============================================================
let tasks = [{ text: "Learn HTML", done: true }, { text: "Learn JavaScript", done: false }];

function render() {
  const list = document.getElementById("todo-list");
  list.innerHTML = ""; // clear the list first
  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    li.textContent = task.text + " ";
    if (task.done) li.classList.add("done");

    // click the text to mark done or not done
    li.addEventListener("click", function () {
      tasks[index].done = !tasks[index].done;
      render();
    });

    // delete button
    const del = document.createElement("button");
    del.textContent = "x";
    del.addEventListener("click", function (event) {
      event.stopPropagation(); // do not also trigger the li click
      tasks.splice(index, 1);  // remove 1 item at this position
      render();
    });
    li.appendChild(del);
    list.appendChild(li);
  });
}

document.getElementById("todo-add").addEventListener("click", function () {
  const input = document.getElementById("todo-input");
  if (input.value.trim() === "") return; // ignore empty tasks
  tasks.push({ text: input.value, done: false });
  input.value = "";
  render();
});
render(); // draw the starting list

// ============================================================
// SECTION 6: LIVE WEATHER (fetch + async/await)
// This calls an API: a web address that returns DATA (JSON) instead of a page. No API key needed.
// ============================================================
async function getWeather() {
  const out = document.getElementById("weather-out");
  out.textContent = "Loading...";  // loading state
  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=7.38&longitude=3.95&current=temperature_2m&timezone=Africa%2FLagos";
    const response = await fetch(url);        // await = wait for the server to answer
    const data = await response.json();       // turn the reply into a JavaScript object
    out.textContent = "Ibadan right now: " + data.current.temperature_2m + " degrees C";
  } catch (error) {
    out.textContent = "Could not load the weather. Check your internet and try again."; // friendly error
  }
}
document.getElementById("weather-btn").addEventListener("click", getWeather);
