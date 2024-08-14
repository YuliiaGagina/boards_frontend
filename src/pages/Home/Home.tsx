import { useEffect, useState } from "react";

import { TodoList } from "../../components/TodoList/TodoList";
import { Title } from "./Home.styled";
import { CardSearchForm } from "../../components/CardSearchForm/CardSearchForm";
import {
  useAddCardMutation,
  useGetAllCardsQuery,
} from "../../redux/todoOperations";
import { Loader } from "../../components/Loader/Loader";
import { CardList } from "../../components/CardList/CardList";
import { CardForm } from "../../components/CardForm/CardForm";
import { IDataCard } from "../../types/types";
import { IoAddCircleSharp } from "react-icons/io5";
import { Button } from './Home.styled';
import { Pagination } from "../../components/Pagination/Pagination";

export const Home = () => {
  const {
    data: cardsData,

    isLoading: cardsLoading,
  } = useGetAllCardsQuery();
  const [currentCardId, setCurrentCardId] = useState<string | undefined>(
    cardsData?.[0]?._id
  );
  const [isAddFormVisible, setIsAddFormVisible] = useState<boolean>(false);
  const [addCard, { isLoading: addCardLoading }] = useAddCardMutation();
  useEffect(() => {
    if (!currentCardId && cardsData && cardsData.length > 0) {
      setCurrentCardId(cardsData[0]._id);
    }
  }, [cardsData, currentCardId]);

  const handleCardAdd = (newCard: IDataCard) => {
    addCard({ cardData: newCard });
    setIsAddFormVisible(false);
  };

  const handleCardSearch = (cardId: string) => {
    setCurrentCardId(cardId);
  };

  if (addCardLoading) return <Loader />;

  return (
    <main>
      <Title>If you want to find a Card use а unique id!</Title>
      {/* <CardList cardsData={cardsData || []} /> */}

      <Pagination cardsData={cardsData || [] } />
      {isAddFormVisible ? (
        <CardForm onCardAdd={handleCardAdd} />
      ) : (
          
        <Button onClick={() => setIsAddFormVisible(true)}><IoAddCircleSharp/></Button>
      )}

      <CardSearchForm onCardSearch={handleCardSearch} />

      {currentCardId && <TodoList currentCardId={currentCardId} />}
    </main>
  );
};
