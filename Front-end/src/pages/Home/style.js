import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "Content";
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
  }

  padding: 50px 123px;

  >.header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;

    h1 {
      font-size: 32px;
      width: 200px;
    }

  }

  >.Notes {
    height: 800px;
    padding-right: 10px;
    overflow-y: auto;
  } 
`

export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BLACK};

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 16px 32px;
  border-radius: 8px;
  
`