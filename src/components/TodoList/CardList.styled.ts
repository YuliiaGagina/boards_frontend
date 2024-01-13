import styled from "@emotion/styled";

export const Title = styled.h2`
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
 
`;

export const Board = styled.div`
max-width: 900px;
margin: 0 auto;
border: 2px solid #744726;
padding: 20px 10px;
`
export const ColumnWrap = styled.div`
display: flex;
justify-content: space-between; 
flew-wrap: wrap;


`

export const List = styled.ul`
  width: 280px;
  height: auto;
  border-left: 1px solid grey;
`;


export const Input = styled.input`
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 12px;
  width: 90px;
  padding: 10px;
  background-color: #c9e913;
  color: white;
  border-radius: 50%;
  :hover {
    background-color: #f1f692;
    color: #413941;
  }
`;
