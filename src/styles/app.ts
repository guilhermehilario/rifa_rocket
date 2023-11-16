import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 32px;
  font-weight: 700;
  padding: 0;
  margin-top: 24px;
`;
