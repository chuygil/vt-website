import { ThemeProvider } from 'next-themes';
import GlobalStyles from '@styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" disableTransitionOnChange>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
