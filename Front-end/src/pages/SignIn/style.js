import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 136px;

> div {

  >h1 {
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 48px;
  font-weight: 700;
}

 >p{
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 14px;
}

> h2 {
  margin: 48px 0;
  font-size: 24px;
  font-weight: 500;
}

}

>a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`

export const Background = styled.div`
  background: url("./src/assets/img.png") no-repeat center center;
  background-size: cover;
  flex: 1;
`
