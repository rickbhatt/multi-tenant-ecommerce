import { CollectionConfig } from "payload";

const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    create: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export { Categories };
export default Categories;
