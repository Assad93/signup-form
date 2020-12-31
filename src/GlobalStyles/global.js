import { createGlobalStyle } from "styled-components";
import bgImgMobile from "../images/bg-intro-mobile.png";
import bgImgDesktop from "../images/bg-intro-desktop.png";

// estilizações globais da aplicação

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        font: 1.6rem 'Poppins', sans-serif;
    }

    #root {
        background-color: hsl(0, 100%, 74%);
        background-image: url(${bgImgMobile});
        background-repeat:repeat-y;

        @media (min-width: 1024px) {
          background-image: url(${bgImgDesktop});
          background-repeat:repeat-y;
        }

        overflow: scroll;
    }

    ul {
        list-style: none;
    }
`