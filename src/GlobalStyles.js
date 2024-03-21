import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    *,
    *::after,
    *::before {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
    }
   
    :root {
        --dark-color: #000;
    }

    body {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        min-height: 100vh;
        background-color: var(--dark-color);
        overflow: hidden;
        perspective: 1000px;
        padding: 50px 0px;
        /*height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Inclusive Sans', sans-serif;
        background: linear-gradient(70deg, blue, 35%, purple, pink);*/
    }

    #root {
        height: 100%;
    }

    .App {
        height: 100%;
    }
`;

export default GlobalStyles;