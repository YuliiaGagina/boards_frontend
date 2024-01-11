import React, { useState } from "react";

import { IDataTodo, ITodo } from "../../types/types";
import { Todo } from "../Todo/Todo";
import { Title } from "./TodoColumn.styled";
import { NewTodoButton } from './../NewTodoButton/NewTodoButton';
import { useAddTodoMutation } from "../../redux/todoOperations";
import { Loader } from "../Loader/Loader";
import { Droppable, Draggable, DraggableProvided, DroppableProvided  } from 'react-beautiful-dnd';
import styled from "@emotion/styled";

interface TodoColumnProps {
 
  todos: ITodo[];
  title: string
 
  indexColumn: number;
 
}



// type TodoColumnType = "Todo" | "InProgress" | "Done";

export const TodoColumn: React.FC<TodoColumnProps> = ({  todos, title , indexColumn }) => {
  const [addTodo, { isLoading: isAdding }] = useAddTodoMutation();
  const [isEditing, setIsEditing] = useState(false);
 
 


    const handleAddTodo = (newTodo: IDataTodo) => {
    addTodo({ todoData: newTodo, cardId: todos[0].cardId });
    setIsEditing(false);
  };



    if(isAdding)return <Loader/>
  return (
    <>
      {todos.length > 0 && (
        <div>
          <Title>{title}</Title>
          <Droppable droppableId={title} type="To do">
            {(provided) => (
              <ul
              ref={provided.innerRef}
            {...provided.droppableProps}
          >
               
                {todos.map((todo, index) => (
                 <Draggable key={todo._id} draggableId={todo._id} index={index}>
            {(provided) => (
              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Todo todo={todo} index={index} key={todo._id} />
              </li>
            )}
          </Draggable>
              ))}
               {provided.placeholder}
              </ul>
             )} 
             
       </Droppable> 
       
           <NewTodoButton onAddTodo={handleAddTodo} />
        </div>
      )}
     
    </>
  );
};