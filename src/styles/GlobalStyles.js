import { createGlobalStyle } from "styled-components";
import NormalizeStyle from "./Normalize";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'roboto';
    src: url('/fonts/roboto-regular.woff2') format('woff2'),
         url('/fonts/roboto-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'roboto-condensed';
    src: url('/fonts/roboto-condensed-regular.woff2') format('woff2'),
         url('/fonts/roboto-condensed-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

${NormalizeStyle}

:root {
    font-size: 18px;
}

body {
    font-family: 'roboto', sans-serif;
    font-size: 1rem;
}

h1 {
    font-size: 2.667rem;
}

.text {
    &-s {
        font-size: .778rem;
    }

    &-xs {
        font-size: .667rem;
    }

    &-condensed {
        font-family: 'roboto-condensed', 'roboto', sans-serif;
    }
}

.bg {
    &-primary {
        background-color: ${({ theme }) => theme.colors.primary}
    }
}

.m {
    &t{
        &-navbar {
            margin-top: ${({ theme }) => theme.sizes.navbarHeight}
        }
    }
}

`;

export default GlobalStyles;
