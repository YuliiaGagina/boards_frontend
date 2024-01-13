import React, { useState } from "react";

import { CardButton } from "../Todo/Todo.styled";
import { IoIosAddCircle } from "react-icons/io";
import { IDataTodo } from "../../types/types";
import { NewTodoForm } from "../NewTodoForm/NewTodoForm";

interface NewTodoButtonProps {
  onAddTodo: (newTodo: IDataTodo) => void;
}

export const NewTodoButton: React.FC<NewTodoButtonProps> = ({ onAddTodo }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddButtonClick = () => {
    setIsAdding(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <>
      <CardButton onClick={handleAddButtonClick} disabled={isAdding}>
        <IoIosAddCircle />
      </CardButton>
      {isAdding && (
        <NewTodoForm onAddTodo={onAddTodo} onCancel={handleCancel} />
      )}
    </>
  );
};
