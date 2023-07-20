import styled from "styled-components"

export const Container = styled.div`

  min-width: 64px;
  margin-right: 8px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 5px 16px;

`