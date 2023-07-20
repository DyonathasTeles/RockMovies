
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 116px;
  padding: 0 123px;
  
  grid-area: header;

  border-bottom: solid 1px ${({ theme }) => theme.COLORS.GRAY_500};

  display: flex;
  gap: 64px;
  align-items: center;

  >h1{
    font-size: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    width: 500px;

  >div {
    display: flex;
    flex-direction: column;
    align-items: end;

  a{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
    width: fit-content;
  }

}

#img{ 
  >img {
  border-radius: 50%;
  height: 70px;
  width: 70px;
  }
}


`
export const SignOut = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: none;
  background: transparent;

  font-size: 16px;
`