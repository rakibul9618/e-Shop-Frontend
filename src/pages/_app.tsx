/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Layout from '@/components/layouts/ComponentLayout';
import BreakpointProvider from '@/provider/BreakpointProvider';
import '@/styles/scss/index.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BreakpointProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BreakpointProvider>
  );
}

export default MyApp;
