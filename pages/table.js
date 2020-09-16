import Head from "next/head";
import Layout from "../components/Layout";
import axios from "axios";
import httpService from "../services/httpService";
function Table({ data }) {
  return (
    <>
      <Head>
        <title>Table</title>
      </Head>
      <Layout>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
            </tr>
          </thead>
          <tbody>
            {data.services.map((item) => (
              <tr>
                <th scope="row">1</th>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const { data } = await axios.get("/services");
  console.log(data);
  return { props: { data } };
}

// Table.getInitialProps = async function () {
//   const { data } = await axios.get("/services");
//   //const data = await res.json();
//   console.log(data);
//   return {
//     bpi: data.bpi,
//   };
// };

export default Table;
