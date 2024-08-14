import React, { useState } from "react";

import {
  Input,
  Label,
  SearchButton,
  SearchFormContainer,
} from "./CardSearchForm.styled";
import { Pagination } from "../Pagination/Pagination";

interface CardSearchFormProps {
  onCardSearch: (cardId: string) => void;
}

export const CardSearchForm: React.FC<CardSearchFormProps> = ({
  onCardSearch,
}) => {
  const [cardId, setCardId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleCardSearch = (e: React.FormEvent) => {
      e.preventDefault();
          if (cardId.trim() === "") {
      setErrorMessage("Please enter a search parameter.");
    } else {
      onCardSearch(cardId.trim());
      setErrorMessage(null);
    }

    setCardId("");
  };

  return (
    <SearchFormContainer onSubmit={handleCardSearch}>
      <Label>
        Card ID:
        <Input
          type="text"
          value={cardId}
          onChange={(e) => setCardId(e.target.value)}
        />
      </Label>
      <SearchButton type="submit">Search</SearchButton>
      {errorMessage && <p>{errorMessage}</p>}
      
      

    
    </SearchFormContainer>
  );
};
