import WithLoadingHOC from '../HOC/WithLoadingHOC';
import { Todo } from '../types/Todo';

type Props = {
  data: Todo[];
};

const TodoTable = ({ data }: Props) => {
  return (
    <>
      <h1>HOC</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

// // instead of directly exporting our component, we pass our component into the HOC to add additional functionalities
export default WithLoadingHOC(TodoTable);
