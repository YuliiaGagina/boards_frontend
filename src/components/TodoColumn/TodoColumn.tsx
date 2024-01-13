import React from "react";

import { IDataTodo, IOneCard, ITodo } from "../../types/types";
import { Todo } from "../Todo/Todo";
import { Item, Itema, Title } from "./TodoColumn.styled";
import { NewTodoButton } from "./../NewTodoButton/NewTodoButton";
import { useAddTodoMutation } from "../../redux/todoOperations";
import { Loader } from "../Loader/Loader";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface TodoColumnProps {
  data: IOneCard | undefined;
  todos: ITodo[];
  title: string;
}

export const TodoColumn: React.FC<TodoColumnProps> = ({
  todos,
  title,
  data,
}) => {
  const [addTodo, { isLoading: isAdding }] = useAddTodoMutation();
  

  if (!data) {
    return <Loader />;
  }

  const handleAddTodo = (newTodo: IDataTodo) => {
    addTodo({ todoData: newTodo, cardId: data._id });
  
  };

  if (isAdding) return <Loader />;
  return (
    <>
      <Itema>
        <Title>{title}</Title>
        <Droppable droppableId={title} type="group">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <Draggable key={todo._id} draggableId={todo._id} index={index}>
                  {(provided) => (
                    <Item
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Todo todo={todo} index={index} key={todo._id} />
                    </Item>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        {title === "To do" && <NewTodoButton onAddTodo={handleAddTodo} />}
      </Itema>
    </>
  );
};
