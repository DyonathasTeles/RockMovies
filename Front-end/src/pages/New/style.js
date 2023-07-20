import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
`
export const Content = styled.div`
  width: 100%;
  padding: 30px 120px;
  overflow-y: scroll;

  grid-area: content;
    
  .header {
    display: grid;
    gap: 24px;

    margin-bottom: 40px;

    h1{
      font-size: 36px;
    }

    button {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: 8px;

      width: fit-content;
      background-color: transparent;
      border: none;
    }
  }

  .inputs {
    display: flex;
    gap: 40px;
    align-items: center;

    margin-bottom: 40px;
  }

  .buttons {
  display: flex;
  gap: 40px;
}


`

export const Section = styled.section`
width: 100%;

margin: 40px 0;

h2{
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 24px;
}

.tags {
  background-color:${({ theme }) => theme.COLORS.BLACK};
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  display: flex;
}

`

