import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

export default function StaticPage({ item }) {
  const router = useRouter();
  function handleClick() {
    router.push("/shop");
  }

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleClick}
        edge="start"
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <h6>{item?.brand}</h6>
      <h4>{item?.name}</h4>
      <img src={item?.image_link} style={{ width: 100 }} alt="" />
      <p>{item?.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1035" } },
      { params: { id: "1026" } },
      { params: { id: "1017" } }
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  );
  const data = await res.json();
  return {
    props: {
      title: "product detail",
      item: data
    }
  };
}
