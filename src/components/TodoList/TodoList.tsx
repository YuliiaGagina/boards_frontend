import React, { useEffect, useState } from "react";
import { IDataTodo, ITodo } from "../../types/types";
import { Droppable, Draggable, DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Loader } from "../Loader/Loader";
import { Board, ColumnWrap } from "./CardList.styled";

import { TodoColumn } from "../TodoColumn/TodoColumn";
import { useChangeTodoStateMutation, useGetAllTodosforCardQuery } from "../../redux/todoOperations";
import { CardSearchForm } from "../CardSearchForm/CardSearchForm";

interface TodoListProps {
  currentCardId: string ;
}

export const TodoList: React.FC<TodoListProps> = ({ currentCardId }) => {
  // const [firstcardId, setFirstCardId] = useState(firstLoadId);
  const { data, error, isLoading: todoQueryLoading , refetch  } = useGetAllTodosforCardQuery(currentCardId || "");
  const [loadedTodos, setLoadedTodos] = useState<ITodo[]>([]);
  const [changeTodoState] = useChangeTodoStateMutation();


  
 useEffect(() => {
  if (data && data.todos) {
    setLoadedTodos(data.todos);
  }
 }, [data]);
  
  const todoStatuses = ["To do", "In progress", "Done"];
 

 
  if (error) return <p>Sorry no data yet!</p>;
  if (todoQueryLoading) return <Loader />
  
    const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
  
    const { source, destination, draggableId } = result;

    const newStatus = todoStatuses[destination.index];

    changeTodoState({ cardId: draggableId, data: { state: newStatus } });
    refetch();
  };
 
  return (<>
  
   
         <Board>
      <ColumnWrap>
     <DragDropContext onDragEnd={handleDragEnd}>
     <Droppable droppableId={"todos"} type="In progress">
    {(provided) => (
      <ColumnWrap ref={provided.innerRef} {...provided.droppableProps}>
        {todoStatuses.map((status, index) => (
          <TodoColumn
            title={status}
            key={index}
            indexColumn={index}
            todos={loadedTodos.length ? loadedTodos.filter((todo) => todo.state === status) : data?.todos.filter((todo) => todo.state === status) || []}
          />
        ))}
      </ColumnWrap>
    )}
  </Droppable>
          </DragDropContext>
       
        </ColumnWrap>
        
      </Board>
      
    
    
   
      </>
    )
   
  
};





{/* <DragDropContext onDragEnd={handleDragEnd}>
  <Droppable droppableId="todoToDo">
    {(provided) => (
      <div ref={provided.innerRef} {...provided.droppableProps}>
        <TodoColumn 
          title="todoToDo"
          todos={(loadedTodos.length ? loadedTodos : data?.todos || [])
            .filter((todo) => todo.state === "To do")}
        />
        {provided.placeholder}
      </div>
    )}
  </Droppable>

  <Droppable droppableId="todoInProgress">
    {(provided) => (
      <div ref={provided.innerRef} {...provided.droppableProps}>
        <TodoColumn
          title="todoInProgress"
          todos={(loadedTodos.length ? loadedTodos : data?.todos || [])
            .filter((todo) => todo.state === "In progress")}
        />
        {provided.placeholder}
      </div>
    )}
  </Droppable>

  <Droppable droppableId="todoDone">
    {(provided) => (
      <div ref={provided.innerRef} {...provided.droppableProps}>
        <TodoColumn
          title="todoDone"
          todos={(loadedTodos.length ? loadedTodos : data?.todos || [])
            .filter((todo) => todo.state === "Done")}
        />
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext> */}







    //  {["todoToDo", "todoInProgress", "todoDone"].map((columnId, columnIndex) => (
         
               
    //               <TodoColumn
    //                 title={columnId}
    //                 key={columnIndex}
    //                 todos={(loadedTodos.length > 0 ? loadedTodos : data?.todos || []).filter((todo) => todo.state === columnId)}
                  
    //               />
              
           
//         ))}
    

//  <TodoColumn
//             title="To Do"
//             todos={loadedTodos.length ? loadedTodos.filter((todo) => todo.state === "To do") : data?.todos.filter((todo) => todo.state === "To do") || []}
//           />
//           <TodoColumn
//             title="In Progress"
//             todos={loadedTodos.length ? loadedTodos.filter((todo) => todo.state === "In progress") : data?.todos.filter((todo) => todo.state === "In progress") || []}
//           />
//           <TodoColumn
//             title="Done"
//             todos={loadedTodos.length ? loadedTodos.filter((todo) => todo.state === "Done") : data?.todos.filter((todo) => todo.state === "Done") || []}
//           />