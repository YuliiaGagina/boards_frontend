import React from "react";
import { IDataTodo, ITodo } from "../../types/types";
import { IoIosAddCircle } from "react-icons/io";

import { TodoForm } from "../TodoForm/TodoForm";

interface EditTodoFormProps {
  todo: ITodo;
  onUpdateTodo: (data: IDataTodo) => void;
  onCancel: () => void;
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({
  todo,
  onUpdateTodo,
  onCancel,
}) => {
  return (
    <TodoForm
      onSubmit={onUpdateTodo}
      onCancel={onCancel}
      initialData={{ title: todo.title, description: todo.description }}
      submitButtonIcon={<IoIosAddCircle />}
    />
  );
};
