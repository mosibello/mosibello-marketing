import {
  FeatureDefault,
  FeatureVariation01,
  FeatureVariation02,
  FeatureVariation03,
} from "@/components/blocks/feature";

const Feature = ({ slice }) => {
  return (
    <>
      {slice.variation == "default" ? (
        <FeatureDefault slice={slice} />
      ) : slice.variation == "variation01" ? (
        <FeatureVariation01 slice={slice} />
      ) : slice.variation == "variation02" ? (
        <FeatureVariation02 slice={slice} />
      ) : slice.variation == "variation03" ? (
        <FeatureVariation03 slice={slice} />
      ) : (
        `<pre>Invalid component selected</pre>`
      )}
    </>
  );
};

export default Feature;
