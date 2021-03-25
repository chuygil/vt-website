import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${() => css`
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 100 900;
      font-display: optional;
      src: url(/fonts/inter-var-latin.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }

    :root {
      /* Light theme colors */
      --color-bg: #ffffff;
      --color-fg: #000000;

      /* Fonts */
      --font-primary: 'Inter', sans-serif;
      --font-regular: 400;
      --font-semibold: 600;
      --font-extrabold: 800;
      --font-base: 16px;
      --font-sm: 1.125rem;
      --font-md: 1.25rem;
      --font-lg: 1.5rem;
      --font-xl: 2rem;
      --font-2xl: 2.5rem;
    }

    [data-theme='dark'] {
      /* Dark theme colors */
      --color-bg: #292929;
      --color-fg: #ffffff;
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: var(--font-primary);
      background-color: var(--color-bg);
      color: var(--color-fg);
    }

    body {
      min-height: 100vh;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `}
`;

export default GlobalStyles;
