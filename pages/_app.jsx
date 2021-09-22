import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const title = pageProps.title || "todoList";
  return (
    <RecoilRoot>
      <Layout title={title}>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
