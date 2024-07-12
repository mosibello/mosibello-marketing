import {
  FeatureDefault,
  FeatureVariation01,
} from "@/components/blocks/feature";

const Feature = ({ slice }) => {
  return (
    <>
      {slice.variation == "default" ? (
        <FeatureDefault slice={slice} />
      ) : slice.variation == "variation01" ? (
        <FeatureVariation01 slice={slice} />
      ) : (
        `<pre>Invalid component selected</pre>`
      )}
    </>
  );
};

export default Feature;
