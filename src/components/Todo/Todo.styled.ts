import styled from "@emotion/styled";



export const Item = styled.div`
  border-radius: 10px;
  background-color: #cd9711;
  width:250px;
  padding: 10px 5px;
  margin-bottom: 10px;

  &:nth-of-type(2n) {
    background-color: #744726;
    color: white;
  }
`;
export const ContentWrap = styled.div`
msrgin-bottom: 10px;`

export const Buttonwrap = styled.div`
display: flex;
justify-content: flex-end;

`;

export const CardButton = styled.button`
background-color: transparent;
`