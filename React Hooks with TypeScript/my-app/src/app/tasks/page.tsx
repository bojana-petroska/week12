'use client';
import TaskList from '@/components/TaskList';
import { useContext, useEffect, useState, createContext } from 'react';

export default function TaskListDisplay() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let timer = setTimeout(() => {
      const fetchedTasks = [
        { id: 1, title: 'Learn React', completed: false },
        { id: 2, title: 'Learn TypeScript', completed: false },
        { id: 3, title: 'Build a Project', completed: false },
      ];
      setTasks(fetchedTasks);
    }, 3000);
  }, []);

  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
}
