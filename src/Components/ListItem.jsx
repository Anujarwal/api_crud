import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, remove, removeTodo } from "../feature/todos/todoSlice";

const ListItem = ({ todo }) => {
  const { isSuccess } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(remove(_id));
    if (isSuccess) dispatch(removeTodo(_id));
  };

  const handleEdit = (todo) => {
    dispatch(edit(todo))
  }

  return (
    <li className="list-group-item">
      <h1 className="display-6">{todo.title}</h1>
      <h1 className="display-6">{todo.description}</h1>
      <span className="btn-sm float-end">
        <button className="btn btn-warning mx-3" onClick={() => handleEdit(todo)}>Edit</button>
        <button
          className="btn btn-danger mx-3"
          onClick={() => handleDelete(todo._id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
