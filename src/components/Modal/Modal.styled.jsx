import styled from 'styled-components';

export const Backdrop = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #1d1c1cca;
  cursor: zoom-out;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: zoom-out;
`;
