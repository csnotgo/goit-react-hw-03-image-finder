import styled from 'styled-components';

export const Header = styled.header`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  background-color: #3e374283;
  width: 100%;
  padding: 10px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 5px;
  border: 2px solid rgba(64, 18, 90, 0.603);
  border-radius: 6px;

  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: italic;

  background-color: rgb(163, 65, 219);

  ::placeholder {
    color: #fcfcfcc0;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 2px solid rgba(64, 18, 90, 0.603);
  border-left: none;
`;


