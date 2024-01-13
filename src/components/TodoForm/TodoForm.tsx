import React, { useState, ChangeEvent, FormEvent } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import { IDataTodo } from "../../types/types";
import {
  CancelButton,
  SubmitButton,
  ButtonContainer,
  Label,
  Input,
  TodoFormContainer,
} from "./TodoForm.styled";

interface TodoFormProps {
  onSubmit: (todoData: IDataTodo) => void;
  onCancel: () => void;
  initialData?: IDataTodo;
  submitButtonIcon: React.ReactNode;
}

export const TodoForm: React.FC<TodoFormProps> = ({
  onSubmit,
  onCancel,
  initialData = { title: "", description: "" },
}) => {
  const [todoData, setTodoData] = useState<IDataTodo>(initialData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoData({
      ...todoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(todoData);
    onCancel();
  };

  return (
    <TodoFormContainer onSubmit={handleSubmit}>
      <Label>
        Title:
        <Input
          type="text"
          name="title"
          value={todoData.title}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Description:
        <Input
          type="text"
          name="description"
          value={todoData.description}
          onChange={handleInputChange}
        />
      </Label>
      <ButtonContainer>
        {" "}
        <SubmitButton type="submit">
          <IoAddCircleSharp />
        </SubmitButton>
        <CancelButton type="button" onClick={onCancel}>
          <GiCancel />
        </CancelButton>
      </ButtonContainer>
    </TodoFormContainer>
  );
};
