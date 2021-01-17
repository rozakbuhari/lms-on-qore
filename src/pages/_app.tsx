import useAuth from "src/hooks/useAuth";
import "tailwindcss/tailwind.css";

const BlankLayout = ({ children }) => children;

function MyApp({ Component, pageProps }) {
  useAuth();
  
  const { Layout = BlankLayout } = Component;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
