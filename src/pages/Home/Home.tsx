import { useEffect, useState } from "react";

import { TodoList } from "../../components/TodoList/TodoList";

import { Title, CardListItem, CardListContainer } from "./Home.styled";

import { CardSearchForm } from "../../components/CardSearchForm/CardSearchForm";
import { useGetAllCardsQuery } from "../../redux/todoOperations";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  const {
    data: cardsData,

    isLoading: cardsLoading,
  } = useGetAllCardsQuery();
  const [currentCardId, setCurrentCardId] = useState<string | undefined>(
    cardsData?.[0]?._id
  );

  useEffect(() => {
    if (!currentCardId && cardsData && cardsData.length > 0) {
      setCurrentCardId(cardsData[0]._id);
    }
  }, [cardsData, currentCardId]);

  const handleCardSearch = (cardId: string) => {
    setCurrentCardId(cardId);
  };

  if (cardsLoading) return <Loader />;

  return (
    <>
      <Title>If you want to find a Card use а unique id!</Title>
      <CardListContainer>
        {cardsData?.map((card) => (
          <CardListItem key={card._id}>
            {" "}
            <p> name:{card.name}</p> <p>id:{card._id} </p> <p></p>
          </CardListItem>
        ))}
      </CardListContainer>

      <CardSearchForm onCardSearch={handleCardSearch} />

      {currentCardId && <TodoList currentCardId={currentCardId} />}
    </>
  );
};
