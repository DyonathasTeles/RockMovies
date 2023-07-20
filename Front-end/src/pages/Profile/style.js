import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  >header {
    width: 100%;
    height: 144px;
    padding: 64px 144px;
    background: ${({ theme }) => theme.COLORS.PINK_DARK};

    >button {
      display: flex;
      gap: 10px;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.PINK};
      
      background-color: transparent;
      border: none;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;

  margin: -100px auto 120px;

  >div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
height: 186px;
width: 186px;
position: relative;
margin: 0 auto 74px;

  img{
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

 label{
    position: absolute;
    height: 48px;
    width: 48px;

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    bottom: 7px;
    right: 7px;

    svg{
      color: ${({ theme }) => theme.COLORS.BLACK};
      font-size: 20px;
    }

    input{
      display: none;
    }
 }

`