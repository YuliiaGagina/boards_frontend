import React, { useEffect, useState } from "react";
import { IDataAdd, IDataTodo, ITodo } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useSelector } from "react-redux";
// import { getIsloading } from "../../redux/selectors";
import { Loader } from "../Loader/Loader";
import { Buttonwrap, CardButton, ContentWrap, Item } from "./Todo.styled";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { useAddTodoMutation, useChangeTodoMutation, useDeleteTodoMutation } from "../../redux/todoOperations";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
// import { deleteTodo } from "../../redux/todoOperations";
import { NewTodoButton } from './../NewTodoButton/NewTodoButton';
import { Draggable } from "react-beautiful-dnd";

interface CardProps {
  todo: ITodo;
  index: number;
 
}

export const Todo: React.FC<CardProps> = ({ todo , index }) => {
  const [isEditing, setIsEditing] = useState(false);
  //  const [isNewTodo, setIsNewTodo] = useState(false);
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  const [updateTodo, { isLoading: isUpdating }] = useChangeTodoMutation();
   const [addTodo, { isLoading: isAdding }] = useAddTodoMutation();

  const handleDeleteTodo = (_id: string) => {
    deleteTodo(_id)
  };

    const handleUpdateTodo = (updatedTodo: IDataTodo) => {
    updateTodo({ cardId: todo._id, data: updatedTodo });
      
       setIsEditing(true);
    
  };

if (!todo) {
  return null; // or handle accordingly
}

  if (isDeleting || isUpdating || isAdding) return <Loader />;



  return (

        <Item key={todo._id}
       
        >
      
      <div>
        {isEditing ?  (
          <EditTodoForm onUpdateTodo={handleUpdateTodo} onCancel={() => setIsEditing(false)} todo={todo} />
        ) : (
            <>
             
            <ContentWrap draggable={true}>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
             
            </ContentWrap>
            <Buttonwrap>
            
                  <CardButton onClick={() => setIsEditing(true)} disabled={isUpdating || isDeleting || isAdding}>
                    <FaRegEdit />
                  </CardButton>
                  <CardButton onClick={() => handleDeleteTodo(todo._id)} disabled={isDeleting || isUpdating || isAdding}>
                    <MdDeleteForever />
                  </CardButton>
               
                </Buttonwrap>
               
          </>
        )}
      </div>
      
      </Item>
     
   
  );
};
