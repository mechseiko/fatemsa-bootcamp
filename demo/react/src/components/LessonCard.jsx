// FILE: src/components/LessonCard.jsx | SESSION 7
// PROPS are inputs to a component, like function arguments. The parent sends them, this component reads them.
function LessonCard({ title, session, summary }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="muted">Session {session}</p>
      {/* Curly braces {} let us put JavaScript values inside JSX. */}
      <p>{summary}</p>
    </div>
  );
}

export default LessonCard;
