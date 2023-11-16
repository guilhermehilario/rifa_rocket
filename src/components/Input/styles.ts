import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

export const InputField = styled.input`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  max-width: 100%;
  padding: 16px 24px;
`;
