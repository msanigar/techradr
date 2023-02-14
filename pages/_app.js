import AuthContextProvider from '../contexts/AuthContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <div data-theme="">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
}

export default MyApp;
