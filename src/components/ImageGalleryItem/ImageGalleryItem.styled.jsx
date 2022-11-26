import styled from 'styled-components';

export const Image = styled.li`
  border-radius: 10px;
  background-color: rgba(81, 15, 107, 0.377);
  transition: transform 300ms;

  img {
    border-radius: 10px;
    cursor: zoom-in;
  }

  :hover {
    transform: scale(1.03);
  }
`;
