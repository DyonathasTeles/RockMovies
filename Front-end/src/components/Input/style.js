import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  >input {
    
    width: 100%;
    height: 56px;
    padding: 16px;

    font-size: 12px;

    background-color: transparent;
    border: none;
  }
 
  >svg {
    margin-left: 12px;
  }
`