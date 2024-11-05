import styled, { createGlobalStyle } from "Styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}`;

export const main = styled.main`
  <backgroung-color>: red;
  height: 100vh;
  display: flex;
  flex-directiom: column;
  align-items: center;
  justify-content: center;
`;
export const h1 = styled.h1`
  color: blue;
`;
export const input = styled.input`
  width: 30vw;
  border: none;
  border-radius: 20px;
  padding: 10px;
  margin: 8px;
`;

export const button = styled.button`
  border: none;
  padding: 10px 15px;
  color: grey;
  border-radius: 5px;
  margin: 5px;
  background-color: white;

  &:hover {
    background-color: #e8e8e8;
    color: #6f5269;
    border: #6f5269 solid 1px;
  }
`;

export const h3 = styled.h3`
  border-radius: 50%;
  padding: 10px;
  color: #584754;
  margin: 10px;
`;
