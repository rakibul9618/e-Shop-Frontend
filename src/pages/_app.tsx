/* eslint-disable @typescript-eslint/explicit-function-return-type */
import BreakpointProvider from '@/provider/BreakpointProvider';
import '@/styles/scss/index.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider>
  );
}

export default MyApp;
