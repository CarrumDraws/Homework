import useFetcher from "../hooks/useFetcher";

// Custom Hooks let you reuse component logic, keeping your code DRY.
// You can fetch data, call hooks, pass in props, etc with Custom Hooks.
const CustomHook = () => {
  const [todos, loading, error] = useFetcher(
    "https://jsonplaceholder.typicode.com/todos"
  );

  // You can have multiple return statements???
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <h1>Custom Hook</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomHook;
