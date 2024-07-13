import { FaqDefault } from "@/components/blocks/faq";

const Faq = ({ slice }) => {
  return (
    <>
      {slice.variation == "default" ? (
        <FaqDefault slice={slice} />
      ) : (
        `<pre>Invalid component selected</pre>`
      )}
    </>
  );
};

export default Faq;
