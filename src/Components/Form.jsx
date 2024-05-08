import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, saveTodo } from "../feature/todos/todoSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;
    if(edit.editMode){
        dispatch(add({
            _id : edit.todo._id,
            title,
            description,
        }))
    }else{
        dispatch(
            saveTodo({
              title,
              description,
            })
          );
    }
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your Title"
        className="form-control my-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <input
        type="text"
        placeholder="Enter Your Description"
        className="form-control my-2"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
      />

      <button className="btn btn-success w-100">Save</button>
    </form>
  );
};

export default Form;
