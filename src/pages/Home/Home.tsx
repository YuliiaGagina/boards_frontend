import { useEffect, useState } from 'react';

import { TodoList } from '../../components/TodoList/TodoList';
// import { ContactForm } from '../../components/ContactForm/ContactForm';
// import ContactList from '../../components/ContactList/ContactList';
// import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Title, Img } from './Home.styled';
// import {  useGetAllTodosforCardQuery } from '../../redux/todoOperations';
import { useAppDispatch } from '../../hooks/redux';
import { CardSearchForm } from '../../components/CardSearchForm/CardSearchForm';
import { useGetAllCardsQuery } from '../../redux/todoOperations';


export const Home = () => {
  // const dispatch = useAppDispatch();  
   const { data: cardsData, error: cardsError, isLoading: cardsLoading } = useGetAllCardsQuery();
    const [currentCardId, setCurrentCardId] = useState<string | undefined>(cardsData?.[0]?._id)

  const handleCardSearch = (cardId: string) => {
   
    setCurrentCardId(cardId);
  };
    useEffect(() => {
    if (!currentCardId && cardsData && cardsData.length > 0) {
      setCurrentCardId(cardsData[0]._id);
    }
  }, [cardsData, currentCardId]);

  return (
    <>
      <Title>If you want to find a Card use а unique id!</Title>
      <ul>
        {cardsData?.map(card => (
          <li key={card._id}> <p> name:{card.name }</p> <p>id:{card._id} </p></li>
        ) )}
      </ul>
      {/* <ContactForm/> */}
      {/* <ContactList /> */}
     
      {/* <SearchForm /> */}
       <CardSearchForm onCardSearch={handleCardSearch} />
       {currentCardId && <TodoList currentCardId={currentCardId} />}
     
    </>
  );
};


