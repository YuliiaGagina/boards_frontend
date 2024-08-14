import styled from '@emotion/styled';
export const CardListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
justify-content: center;
  gap: 20px;
`;

export const CardListItem = styled.li`
max-width: 220px;
  background-color: #f7ef7a;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(151, 47, 117, 0.6); 
  }

  p {
    margin-bottom: 10;
    font-size: 12px;
    font-weight: bold;
    color: #333; 
  }


`;
export const Text = styled.p`
margin-bottom: 20px;`

export const Button = styled.p`
width: 20px;
display: flex;
align-items: center;
justify-content; center;
padding: 5px;
margin: 0 auto;
background-color: transparent;
&:hover {
    background-color: red;
}`