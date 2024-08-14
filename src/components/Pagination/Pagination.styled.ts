
import styled from '@emotion/styled';

export const PaginationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  background-color: rgba(121, 47, 117, 0.6);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(151, 47, 117, 0.6);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 16px;
  color: #333;
`;
