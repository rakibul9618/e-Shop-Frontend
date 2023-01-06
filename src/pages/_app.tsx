
import BreakpointProvider from '@/provider/BreakpointProvider';
import '@/styles/scss/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider>
  );
}

export default MyApp;
