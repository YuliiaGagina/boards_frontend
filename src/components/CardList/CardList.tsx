import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  CardListContainer,
    CardListItem,
    Text,
  Button
} from "./CardList.styled";
import {  IOneCard } from "../../types/types";
import {  useDeleteCardMutation } from "../../redux/todoOperations";
import { Loader } from "../Loader/Loader";


interface CardListProps {
    cardsData: IOneCard[];
  

}

export const CardList: React.FC<CardListProps> = ({ cardsData }) => {

   
   
    const [deleteCardMutation, { isLoading: loadeingForDelete }] = useDeleteCardMutation();
    
      const handleCardDelete =  (cardId: string) => {
    deleteCardMutation(cardId, );
    };
    
  

    

    if(loadeingForDelete) return <Loader />     
  return (
    <CardListContainer>
      {cardsData?.map((card) => (
        <CardListItem key={card._id}>
          <p>Name: {card.name}</p>
          <Text>ID: {card._id}</Text>
          <Button onClick={() => handleCardDelete(card._id)}><RiDeleteBin6Fill/></Button>
          </CardListItem>
         
          
      ))}
      
    </CardListContainer>
  );
};
