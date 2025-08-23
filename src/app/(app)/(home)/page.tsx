import configPromise from "@payload-config";
import { getPayload } from "payload";

const Home = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, //populate subcategories
    where: {
      parent: {
        exists: false,
      },
    },
  });
  console.log("🚀 ~ Home ~ data:", data);

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default Home;
