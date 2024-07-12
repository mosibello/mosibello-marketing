import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import FeatureVariant01 from "@/components/blocks/feature/FeatureVariant01";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <FeatureVariant01 />
    </>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
