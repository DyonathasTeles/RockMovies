import styled from "styled-components"

export const Container = styled.button `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isBlack }) => isBlack ? theme.COLORS.BLACK : theme.COLORS.PINK};
  color: ${({ theme, isBlack }) => isBlack ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_400};

  padding: 0 16px;
  height: 56px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  margin-top: 16px;

  &:disabled {
    opacity: 0.5;
  }

  >svg {
    margin-right: 8px;
  }
`