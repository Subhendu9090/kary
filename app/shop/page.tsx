import ProductListing from "@/components/ProductListing";

interface ShopPageProps {
  searchParams: Promise<{
    main?: "women" | "men" | "travel";
    category?: string;
    sub?: string;
  }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;

  const main = params?.main || "women";
  const category = params?.category;
  const sub = params?.sub;

  console.log(main, category, sub);

  return (
    <ProductListing
      initialMainCategory={main}
      initialCategory={category}
      initialSubcategory={sub}
    />
  );
}