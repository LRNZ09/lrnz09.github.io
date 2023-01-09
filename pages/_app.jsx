import { GlobalStyle, ThemeProvider } from '@react95/core'
import Icons from '@react95/icons'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const CustomGlobalStyle = createGlobalStyle`
  body {
    user-select: none;

    a {
      color: ${(props) => props.theme.colors.black};
    }
    ul a {
      text-decoration: none;
    }
  }
`

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel='icon' type='image/x-icon' href={Icons.user} />
      <meta name='cf-2fa-verify' content='8da19b3f06c2a29' />
    </Head>

    <ThemeProvider>
      <GlobalStyle />
      <CustomGlobalStyle />

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
