import { Task } from '@/interfaces';

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.completed ? 'completed' : 'not completed'}
        </li>
      ))}
    </ul>
  );
}
