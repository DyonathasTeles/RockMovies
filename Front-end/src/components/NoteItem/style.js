import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  min-width: 100px;
  margin-right: 24px;

  background: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.BACKGROUND_700};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isnew }) => isnew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none" };

  border-radius: 10px;
  padding: 0 16px;

  button {
    border: none;
    background: none;
  }

  input {
    height: 56px;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background-color: transparent;
    border: none;

    &::placeholder{
      ${({ theme }) => theme.COLORS.GRAY_100}
    }
  }

  svg{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 22px;
  }
`