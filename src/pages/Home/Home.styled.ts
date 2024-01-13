import styled from '@emotion/styled';

export const Title = styled.h1`
text-shadow: 5px -3px 3px #744726;
line-height:1.8;
padding-top: 100px;
padding-bottom: 50px;
color: #413941;
text-align: center;`


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
    background-color: #4f2817; 
  }

  p {
    margin-bottom: 10;
    font-size: 12px;
    font-weight: bold;
    color: #333; 
  }


`;

export const HomeTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333; 
`;