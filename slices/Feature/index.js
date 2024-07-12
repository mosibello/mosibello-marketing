import { FeatureDefault } from "@/components/blocks/feature";

const Feature = ({ slice }) => {
  return (
    <>
      {slice.variation == "default" ? (
        <FeatureDefault slice={slice} />
      ) : (
        `<pre>Invalid component selected</pre>`
      )}
    </>
  );
};

export default Feature;
