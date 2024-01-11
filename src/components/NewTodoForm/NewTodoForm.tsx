// NewTodoForm.tsx
import React, { useState } from "react";
import { IDataTodo } from "../../types/types";
import { IoIosAddCircle } from "react-icons/io";
import { GiCancel } from "react-icons/gi";

interface NewTodoFormProps {
  onAddTodo: (newTodo: IDataTodo) => void;
  onCancel: () => void;
}

export const NewTodoForm: React.FC<NewTodoFormProps> = ({ onAddTodo, onCancel }) => {
  const [newTodo, setNewTodo] = useState<IDataTodo>({
    title: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      onAddTodo(newTodo);
      onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={newTodo.title} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={newTodo.description}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit"><IoIosAddCircle/></button>
      <button type="button" onClick={onCancel}>
        <GiCancel/>
      </button>
    </form>
  );
};
