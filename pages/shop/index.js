import Grid from "@mui/material/Grid";
import Card from "../../components/Card";
import Head from "next/head";

function List({ items }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      columns={3}
      gap={3}
    >
      <Head>
        <title>getServerSideProps</title>
      </Head>
      {items.slice(0, 10).map((data) => (
        <Grid key={data.id}>
          <Card
            imgpath={data.image_link}
            id={data.id}
            title={data.name}
            desc={data.brand}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`
  );
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: true
      }
    };
  }
  return {
    props: {
      title: `shop-${process.env.name}`,
      items: data
    } // will be passed to the page component as props
  };
}

export default List;
