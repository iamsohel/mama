import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <Layout>
        <main role="main" className="container">
          <div className="starter-template">
            <h1>Bootstrap starter template</h1>
            <p className="lead">
              Use this document as a way to quickly start any new project.
              <br /> All you get is this text and a mostly barebones HTML
              document.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}
