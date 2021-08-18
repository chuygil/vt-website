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
      --color-outline: #1b79c5;
      --color-gray-primary: #5c5c5c;
      --color-blue-primary: #724cf9;

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

      /* Spacing */
      --space-sm: 0.5rem;
      --space-md: 1rem;
      --space-lg: 2.5rem;
      --space-xl: 5rem;
      --space-body: 64rem;

      /* Radius variants */
      --radius-sm: 3px;
      --radius-md: 5px;
    }

    [data-theme='dark'] {
      /* Dark theme colors */
      --color-bg: #1f1f1f;
      --color-fg: #ffffff;
      --color-outline: #3a97e4;
      --color-gray-primary: #c2c2c2;
      --color-blue-primary: #85a7ff;
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: var(--font-primary);
      font-weight: var(--font-regular);
      font-size: var(--font-base);
      background-color: var(--color-bg);
      color: var(--color-fg);
    }

    body {
      min-height: 100vh;
    }

    section {
      padding: var(--space-xl) 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: var(--font-extrabold);
    }

    h1 {
      font-size: var(--font-2xl);
    }

    h2 {
      font-size: var(--font-xl);
    }

    h3 {
      font-size: var(--font-lg);
    }

    h4,
    h5,
    h6 {
      font-size: var(--font-md);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: var(--font-xl);
      }
    }
  `}
`;

export default GlobalStyles;
