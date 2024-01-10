import Layout from "@/components/Layout";
import HeadingWithIconCards from "@/components/blocks/features/HeadingWithIconCards";
import TwoColumnContentWithImage from "@/components/blocks/features/TwoColumnContentWithImage";
import SpotlightHero from "@/components/blocks/heroes/SpotlightHero";
import TestimonialBanner from "@/components/blocks/testimonials/TestimonialBanner";

const WebDevelopment = () => {
  return (
    <>
      <Layout>
        <SpotlightHero
          heading={`People and search engines <br class="u__show-after-992" />love fast sites`}
          description={`Ready for the next generation of websites? We can build a superfast <br class="u__show-after-992" />and secure website for you, increase conversions, improve SEO ranking <br class="u__show-after-992" />and attract more users.`}
          className="b__size-lg"
          centered={false}
        />
        <HeadingWithIconCards
          headingSize="h2"
          className="b__size-md u__border-top"
        />
        <TwoColumnContentWithImage
          enableCardBorder
          className="b__size-md u__border-top"
          isCard
        />
        <TwoColumnContentWithImage
          isCard
          enableCardBorder
          cardBackgroundColor="var(--t-secondary-light-background-color)"
          className="b__size-md pt-0"
        />
        <TwoColumnContentWithImage
          isCard
          enableCardBorder
          cardBackgroundColor="var(--t-tertiary-light-background-color)"
          className="b__size-md pt-0"
        />
        <TestimonialBanner className="b__size-md pt-0" />
        <HeadingWithIconCards
          columnClassName="col-md-6 col-lg-4 mb-4"
          className="b__size-md u__border-top"
          headingSize="h2"
          cardClassName="u__bg-white c__icon-card--with-border"
          cards={[
            ...Array(3).fill({
              iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" > <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /> </svg>`,
              heading: `Sample Heading`,
              description: `All of our web app development projects have a dedicated development team that continues to work on the product throughout its lifetime to ensure it’s always functioning properly.`,
              button: null,
            }),
          ]}
        />
      </Layout>
    </>
  );
};

export default WebDevelopment;
