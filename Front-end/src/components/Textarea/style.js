import styled from "styled-components"

export const Container = styled.textarea`
  border: none;
  resize: none;

  width: 100%;
  height: 230px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 20px;

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`