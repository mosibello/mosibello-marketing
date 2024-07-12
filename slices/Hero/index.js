import { HeroDefault, HeroVariation01 } from "@/components/blocks/hero";

const Hero = ({ slice }) => {
  return (
    <>
      {slice.variation == "default" ? (
        <HeroDefault slice={slice} />
      ) : slice.variation == "variation01" ? (
        <HeroVariation01 slice={slice} />
      ) : (
        `<pre>Invalid component selected</pre>`
      )}
    </>
  );
};

export default Hero;
