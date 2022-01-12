// #region Global Imports
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
// #endregion Global Imports

// #region Local Imports
import '../src/styles/globals.scss'
import store from '../src/Store'
// #endregion Local Imports

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
