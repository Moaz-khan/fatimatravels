import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { getPackagesQuery } from "@/sanity/lib/queries";
import PackagesContent from "./PackagesContent";

export default async function PackagesPage() {
  const packages = await client.fetch(getPackagesQuery) || [];
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-[#5409DA]"></div>
      </div>
    }>
      <PackagesContent packagesData={packages} />
    </Suspense>
  );
}
