// EditTodoForm.tsx
import React, { useEffect, useState } from "react";
import { IDataTodo, ITodo } from "../../types/types";
import { IoIosAddCircle } from "react-icons/io";
import { GiCancel } from "react-icons/gi";

interface EditTodoFormProps {
    todo: ITodo
  onUpdateTodo: (data: IDataTodo) => void;
  onCancel: () => void;
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({ todo,  onUpdateTodo,  onCancel }) => {
   const [editedTodo, setEditedTodo] = useState<IDataTodo>({
    title: todo.title,
    description: todo.description,
   });
    
    
//       useEffect(() => {
 
//     if (todo) {
//       setEditedTodo({
//         title: todo.title,
//         description: todo.description,
//       });
//     }
//   }, [todo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTodo({
      ...editedTodo,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
     onUpdateTodo(editedTodo);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={editedTodo.title} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={editedTodo.description}
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




