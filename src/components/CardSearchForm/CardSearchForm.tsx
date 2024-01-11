// CardSearchForm.tsx

import React, { useEffect, useState } from "react";
import { useGetAllTodosforCardQuery } from "../../redux/todoOperations";
import { ITodo } from "../../types/types";

interface CardSearchFormProps {
  onCardSearch: (cardId: string) => void;
}

export const CardSearchForm: React.FC<CardSearchFormProps> = ({onCardSearch} ) => {
  const [cardId, setCardId] = useState<string>("");

   const handleCardSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onCardSearch(cardId);
  };
 
  return (
      <form onSubmit={handleCardSearch}>
      <label>
        Card ID:
        <input type="text" value={cardId} onChange={(e) => setCardId(e.target.value)} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
