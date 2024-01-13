
import React from "react";
import { IDataTodo } from "../../types/types";
import { IoIosAddCircle } from "react-icons/io";

import {TodoForm}  from "../TodoForm/TodoForm";

interface NewTodoFormProps {
  onAddTodo: (newTodo: IDataTodo) => void;
  onCancel: () => void;
}

export const NewTodoForm: React.FC<NewTodoFormProps> = ({ onAddTodo, onCancel }) => {
  return (
    <TodoForm
      onSubmit={onAddTodo}
      onCancel={onCancel}
      submitButtonIcon={<IoIosAddCircle />}
    />
  );
};


