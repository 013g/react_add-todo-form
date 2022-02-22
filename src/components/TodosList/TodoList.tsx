import React, { useState } from 'react';
import { TodoInfo } from '../TodosInfo/TodoInfo';
import { UserWithTask } from '../../types/Todo';
import { users } from '../../api/users';
import './TodosList.css';
import todos from '../../api/todos';

type Props = {
  todoList:UserWithTask[],
};

export const TodoList:React.FC<Props> = ({ todoList }) => {
  const [completed, setComplete] = useState(false);
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState('');
  const [id, setId] = useState(1);

  const increase = () => {
    setId(currentId => currentId + 1);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.currentTarget.value);
          }}
        />
        <select>
          <option value="">
            Choose an user
          </option>
          {users.map(user => (
            <option key={user.id} value={user.name}>
              {user.name}
              {setUserId(user.id)}
            </option>
          ))}
        </select>

        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            setComplete(true);
          }}
        />

        <button
          type="button"
          onClick={
            () => {
              increase();
              // eslint-disable-next-line no-console
              console.log(userId, id, title, completed, todos);
            }
          }
        >
          Add
        </button>

      </form>
      <ul className="todos__list">
        {
          todoList.map(todo => (
            <li className="todos__item" key={todo.id}>
              <TodoInfo todo={todo} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
