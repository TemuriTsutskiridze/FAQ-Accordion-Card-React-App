import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
        padding: 14.8rem 8.5rem;
        display: flex;
        justify-content: center;
    }
`