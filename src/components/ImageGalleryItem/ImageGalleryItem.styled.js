import styled from 'styled-components';

export const Li = styled.li``;

export const Img = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-radius: 2px;
    transform: scale(1.03);
    cursor: zoom-in;
    border-radius: 20px;
  }
`;
