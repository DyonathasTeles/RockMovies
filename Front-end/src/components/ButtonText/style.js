import styled from "styled-components"

export const Container = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;

  font-size: 16px;
  
  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.PINK};

 svg {
  margin-right: 8px;
 }
`