import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    img{
        width: 100%;
        height: 100%;
    }
    h1{
        font-weight: bold;
        color: #FFF0EE;
        font-size: 40px;
    }
    h3{
        font-weight: bold;
        color: #515151;
        font-size: 34px;
    }
`;
