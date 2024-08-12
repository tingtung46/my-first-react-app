const todos = [
  { task: "mow the yard", id: 121 },
  { task: "Work on Odin Projects", id: 122 },
  { task: "feed the cat", id: 123 },
];

export default function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
