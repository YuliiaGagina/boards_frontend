import React, { useState } from "react";
import { Input, Label, Button, FormContainer } from "./CardForm.styled";
import { IDataCard } from "../../types/types";

interface CardFormProps {
  onCardAdd: (newCard: IDataCard) => void;
}

export const CardForm: React.FC<CardFormProps> = ({ onCardAdd }) => {
  const [cardData, setCardData] = useState<IDataCard>({ name: "" });
  const [nameError, setNameError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "name" && value.length !== 3) {
      setNameError("Ім'я має містити лише 3 цифри.");
    } else {
      setNameError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardData.name.length === 3) {
      onCardAdd(cardData);
      setCardData({ name: "" });
      setNameError(null);
    } else {
      setNameError("Ім'я має містити лише 3 цифри.");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          value={cardData.name}
          onChange={handleInputChange}
        />
      </Label>
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}
      <Button type="submit">Add Card</Button>
    </FormContainer>
  );
};
