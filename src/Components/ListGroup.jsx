import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../feature/todos/todoSlice";


const ListGroup = () => {
  const { isLoading, isError, allTodos } = useSelector((state) => state.todos);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodo())
  } , [])


  if (isLoading) {
    return <h1 className="text-center text-primary">Loading....</h1>;
  }
  if (isError) {
    return <h1 className="text-center text-danger">Error....</h1>;
  }


  if(allTodos.length === 0){
    return(
        <h1 className="text-center text-warning">No Todo Yet...</h1>
    )
  }

  return (
    <li className="list-group my-3">
      {allTodos.map((todo) => (
        <ListItem key={todo._id} todo={todo} />
      ))}
    </li>
  );
};

export default ListGroup;
