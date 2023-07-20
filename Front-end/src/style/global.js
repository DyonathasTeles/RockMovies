import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

  }

  ::-webkit-scrollbar {
      background-color: transparent;
      width: 10px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      width: 10px;
      border-radius: 10px;
      transition: all 100ms;
  }

  ::-webkit-scrollbar-thumb:hover {

  }

  body, input, button, label, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button, a {
    cursor: pointer;
    transition: all 300ms 100ms;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  a {
    text-decoration: none;
  }
`