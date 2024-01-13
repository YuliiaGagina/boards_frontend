import styled from "@emotion/styled";
export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: #7f5e4b; 
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #e0dcd5;
  border-radius: 4px;
  outline: none;
`;

export const SearchButton = styled.button`
  background-color: #a99a8d;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #8e7c6f;
  }
`;