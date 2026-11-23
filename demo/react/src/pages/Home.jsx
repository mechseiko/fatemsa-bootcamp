// FILE: src/pages/Home.jsx | SESSION 7
// TEACHES: reusing one component many times with .map(), and why "key" is needed.
import LessonCard from "../components/LessonCard.jsx";

// A normal JavaScript array of objects. This is our data.
const lessons = [
  { id: 1, title: "How the web works", session: 1, summary: "Client, server, URL, domain." },
  { id: 2, title: "HTML and CSS", session: 2, summary: "Structure and style." },
  { id: 3, title: "JavaScript", session: 3, summary: "Make pages interactive." },
  { id: 4, title: "React", session: 7, summary: "Build with components." },
];

function Home() {
  return (
    <main className="page">
      <h1>Home</h1>
      <p>One component, many cards. Add an object to the lessons array and watch a new card appear.</p>
      <div className="row">
        {/* .map() turns each lesson into a <LessonCard />. React needs a unique "key" to track each item in a list. */}
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} title={lesson.title} session={lesson.session} summary={lesson.summary} />
        ))}
      </div>
    </main>
  );
}

export default Home;
