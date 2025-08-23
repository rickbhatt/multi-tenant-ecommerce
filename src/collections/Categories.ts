import { CollectionConfig } from "payload";

const Categories: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export { Categories }
export default Categories
