import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Cuprum', sans-serif;
        text-transform: uppercase;
        
    }

    a, button{
      
        cursor: pointer;
    }
    .btn {
        padding: 1rem 2rem;
        background-color: black;
        color: white;
        border: 0.15rem solid white;
        border-radius: 0.5rem;  
        text-decoration: none;
    }


    
`;

export default GlobalStyle;
