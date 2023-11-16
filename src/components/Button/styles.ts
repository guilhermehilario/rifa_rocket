import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
  width: 128px;
  height: 12px;
  padding: 16px 24px 16px 24px;
  border-radius: 12px;
`;
