import React, { useState } from "react";

import { IOneCard } from "../../types/types";
import { CardList } from "../CardList/CardList";
import { PageInfo, PaginationButton, PaginationWrap } from "./Pagination.styled";

interface PaginationProps {
  cardsData: IOneCard[];
  cardsPerPage?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  cardsData,
  cardsPerPage = 2,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div>
      <CardList cardsData={currentCards} />
      <PaginationWrap>
        <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        <PageInfo>
          Page {currentPage} of {totalPages}
        </PageInfo>
        <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </PaginationButton>
      </PaginationWrap>
    </div>
  );
};
