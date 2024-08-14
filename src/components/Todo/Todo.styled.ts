import styled from "@emotion/styled";



// export const Item = styled.div`
//   border-radius: 10px;
//   background-color: #cd9711;
//   width:250px;
//   padding: 10px 5px;
//   margin-bottom: 10px;

//   &:nth-of-type(2n) {
//     background-color: #744726;
//     color: white;
//   }
// `;
export const ContentWrap = styled.div`
msrgin-bottom: 10px;`

export const Buttonwrap = styled.div`
display: flex;
justify-content: flex-end;

`;

export const CardButton = styled.button`
background-color: transparent;
  cursor: pointer;

  outline: none;

  &:hover {
    background-color: #f7ef7a; 
  }

  &:disabled {
    background-color: #ccc; 
    cursor: not-allowed;
  }
`


export const TodoContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f5f5f5; /* Light grey */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0; /* Slightly darker grey on hover */
  }
`;



export const TodoTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #2a2a2a; 
`;

export const TodoDescription = styled.p`
  margin: 8px 0 0;
  font-size: 16px;
  color: black;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

