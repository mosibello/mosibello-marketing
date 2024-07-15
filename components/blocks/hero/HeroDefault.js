import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import BlurryBlob from "@/components/modules/BlurryBlob";

const HeroDefault = ({ slice }) => {
  return (
    <Bounded
      type={slice.slice_type}
      variation={slice.variation}
      className="b__hero__default overflow-hidden position-relative"
      scopedCss={slice.primary.scoped_css}
    >
      {slice.primary.enable_blobs && (
        <>
          <BlurryBlob top="-10rem" left="-10rem" />
          <BlurryBlob
            bottom="-10rem"
            right="-10rem"
            color="var(--t-blob-color-2)"
          />
        </>
      )}
      <div className="container position-relative u__z-index-1">
        <div className="text-center">
          {slice.primary.heading && (
            <div className="c__heading-wrapper mb-4">
              <h1 className="c__heading u__d1">
                {parse(slice.primary.heading)}
              </h1>
            </div>
          )}
          {slice.primary.description && (
            <div className="c__subtitle-wrapper mb-4">
              <h2 className="c__heading u__h5  mb-2">
                {parse(slice.primary.description)}
              </h2>
            </div>
          )}
          {slice.primary.content && (
            <div
              className="c__description-wrapper mx-auto"
              style={{ maxWidth: 900 }}
            >
              <p className="c__description u__subtitle">
                {parse(slice.primary.content)}
              </p>
            </div>
          )}
          <div className="c__button-wrapper mt-4 pt-3">
            <Button
              destination={slice.primary.button_destination}
              title={slice.primary.button_title}
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default HeroDefault;
