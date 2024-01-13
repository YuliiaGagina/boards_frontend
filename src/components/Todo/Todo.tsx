import React, { useState } from "react";
import { IDataTodo, ITodo } from "../../types/types";

import { Loader } from "../Loader/Loader";
import {
  Buttonwrap,
  CardButton,
  ContentWrap,
  TodoDescription,
  TodoTitle,
} from "./Todo.styled";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import {
  useChangeTodoMutation,
  useDeleteTodoMutation,
} from "../../redux/todoOperations";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";

interface CardProps {
  todo: ITodo;
  index: number;
}

export const Todo: React.FC<CardProps> = ({ todo, index }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  const [updateTodo, { isLoading: isUpdating }] = useChangeTodoMutation();

  const handleDeleteTodo = (_id: string) => {
    deleteTodo(_id);
  };

  const handleUpdateTodo = (updatedTodo: IDataTodo) => {
    updateTodo({ cardId: todo._id, data: updatedTodo });

    setIsEditing(true);
  };

  if (!todo) {
    return null;
  }

  if (isDeleting || isUpdating) return <Loader />;

  return (
    <div>
      <div>
        {isEditing ? (
          <EditTodoForm
            onUpdateTodo={handleUpdateTodo}
            onCancel={() => setIsEditing(false)}
            todo={todo}
          />
        ) : (
          <>
            <ContentWrap draggable={true}>
              <TodoTitle>{todo.title}</TodoTitle>
              <TodoDescription>{todo.description}</TodoDescription>
            </ContentWrap>
            <Buttonwrap>
              <CardButton
                onClick={() => setIsEditing(true)}
                disabled={isUpdating || isDeleting}
              >
                <FaRegEdit />
              </CardButton>
              <CardButton
                onClick={() => handleDeleteTodo(todo._id)}
                disabled={isDeleting || isUpdating}
              >
                <MdDeleteForever />
              </CardButton>
            </Buttonwrap>
          </>
        )}
      </div>
    </div>
  );
};
