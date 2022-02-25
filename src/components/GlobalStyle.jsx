import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        background-color: none;
        padding: 0.5rem 1rem;
        border-radius: 0.4rem;   
        cursor: pointer;
    }

    
`;

export default GlobalStyle;
