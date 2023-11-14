export default function Task({ name, onComplete }) {
  return (
    <div className="task-wrapper">
      <input type="radio" id="task-radio" onClick={onComplete} />
      <h1>{name}</h1>
    </div>
  );
}
