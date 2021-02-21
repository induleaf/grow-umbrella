
import { withRouter } from 'next/router';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/globals';

function AppComponent({ Component, pageProps, router }: AppProps): React.ReactElement {

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default withRouter(AppComponent);
