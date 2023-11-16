import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  height: 100%;
  width: 100%;
  max-width: 1128px;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: 28px;

  width: 100%;
  margin-top: 48px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100%;
`;
