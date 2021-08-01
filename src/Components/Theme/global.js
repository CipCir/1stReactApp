import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body { 
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text}; 
    transition: all 0.25s linear;
  }

  button {
    display: block;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 10px;
    border: solid 1px ${({ theme }) => theme.toggleBorder};
    cursor:pointer;
  }
  a,.MainTxt {
    color: ${({ theme }) => theme.text};
  }
  header{
    background: ${({ theme }) => theme.navBar};
  }
  .formRow,.tCard{
    background: ${({ theme }) => theme.formRow};
  }
  
`;
