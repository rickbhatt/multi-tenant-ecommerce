import configPromise from "@payload-config";
import { getPayload } from "payload";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SearchFilters } from "@/components/search-filters";
import { Category } from "@/payload-types";
import { CustomCategory } from "type";

interface Props {
  children: React.ReactNode;
}

const HomeLayout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, //populate subcategories, subcategories.[0] will be a type of category
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
    sort: "name",
  });

  const formattedData: CustomCategory[] = data.docs.map((category) => ({
    ...category,
    subcategories: (category.subcategories?.docs || []).map((doc) => ({
      // Because of depth 1 we are confident "doc" will be a category
      ...(doc as Category),
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
