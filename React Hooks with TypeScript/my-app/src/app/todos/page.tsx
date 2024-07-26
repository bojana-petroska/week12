'use client';
import { useReducer } from 'react';

const reduce = (state, action) => {
  switch (action.type) {
    case 'completed':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, status: 'completed' };
        } else {
          return todo;
        }
      });
    case 'inprogress':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, status: 'inprogress' };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function Todos() {
  const initialTodos = [
    {
      id: 1,
      title: 'do homework',
      status: 'completed',
    },
    {
      id: 2,
      title: 'walk dogs',
      status: 'completed',
    },
    {
      id: 3,
      title: 'wash dishes',
      status: 'inprogress',
    },
  ];

  const [todos, dispatch] = useReducer(reduce, initialTodos);

  return <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.status === 'completed'}></input>
          {todo.title}
        </div>
      ))}
    </>;
}

