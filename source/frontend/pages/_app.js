import "../styles/globals.css";
import Layout from "../components/Layout";
import MoralisProvider from "react-moralis"

export default function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId= {process.env.NEXT_PUBLIC_APP_ID} 
    serverURL={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  );
}
