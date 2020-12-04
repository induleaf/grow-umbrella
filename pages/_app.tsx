import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/globals';
import * as locales from '../content/locale';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const { locale, defaultLocale, pathname } = useRouter();
  const localeIntl = locale || defaultLocale;
  const localeCopy = locales[localeIntl];
  const messages = localeCopy[pathname];
  return (
    <IntlProvider locale={localeIntl} defaultLocale={defaultLocale} messages={messages}>
      <GlobalStyles />
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
