import CtaBanner from "@/components/blocks/ctas/CtaBanner";
import HeadingWithIconCards from "@/components/blocks/features/HeadingWithIconCards";
import TwoColumnContentWithImage from "@/components/blocks/features/TwoColumnContentWithImage";
import SpotlightHero from "@/components/blocks/heroes/SpotlightHero";
import TestimonialBanner from "@/components/blocks/testimonials/TestimonialBanner";

const CustomWebApp = () => {
  return (
    <>
      <SpotlightHero
        heading={`People and search engines <br class="u__show-after-992" />love fast sites`}
        description={`Ready for the next generation of websites? We can build a superfast <br class="u__show-after-992" />and secure website for you, increase conversions, improve SEO ranking <br class="u__show-after-992" />and attract more users.`}
        className="b__size-lg"
        centered={false}
      />
      <HeadingWithIconCards
        headingSize="h2"
        className="b__size-md u__border-top pb-4 pb-lg-5"
        description={`We employ a contemporary technology stack and implement server-side <br class="u__show-after-992" />rendering to deliver benefits to our customers`}
        cards={[
          {
            iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"> <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" /> </svg>`,
            heading: `Quality of Work`,
            description: `Delivered projects meet the highest engineering requirements and are pixel-perfect.`,
            button: { title: `Learn More`, destination: `/contact` },
          },
          {
            iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"> <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" /> <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" /> </svg>`,
            heading: `Outstanding Project Management`,
            description: `We ensure that your initiatives are completed smoothly and effectively by bringing unmatched organization to every project.`,
            button: { title: `Learn More`, destination: `/contact` },
          },
          {
            iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"> <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" /> <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" /> </svg>`,
            heading: `Total Command Over the Budget`,
            description: `We define clear specifications at the beginning of every project and provide updates on the status of budget utilization on a regular basis.`,
            button: { title: `Learn More`, destination: `/contact` },
          },
          {
            iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" > <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /> </svg>`,
            heading: `A Real Agile Methodology`,
            description: `The Agile methodology facilitates long-term project maintenance as well as rapid and effective results delivery.`,
            button: { title: `Learn More`, destination: `/contact` },
          },
        ]}
      />
      <TestimonialBanner
        heading={`Mosibello's web engineering surpassed expectations with <br class="u__show-after-992" />innovative solutions and meticulous attention to detail. <br class="u__show-after-992" />Highly recommended for top-notch expertise!`}
        className="b__size-md pt-0"
        name="Emily Mitchell"
        title="Marketing Manager @ Swoop Inc"
      />
      <TwoColumnContentWithImage
        title={`Modern Web Development`}
        heading={`Search Engines and Users Both Adore Quick Websites`}
        content={`<p>Are you prepared for the next wave of websites? With Jamstack and HubSpot, we can create a website for you that loads very quickly, is safe, boosts conversions, raises your SEO ranking, and draws in more visitors.</p><p>Businesses can keep all of their customer data in one location with HubSpot's centralized customer database, ensuring access to the most recent and accurate data.</p>`}
        button={{
          title: `Learn More`,
          destination: `/web-development`,
        }}
        enableCardBorder
        className="b__size-md u__border-top"
        cardBackgroundColor="var(--t-cp-base-white)"
        isCard
        imageObjectFit={`contain`}
        imageScale={`1.2`}
        image={{
          src: `https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/image.svg`,
          alt: ``,
        }}
      />
      <TwoColumnContentWithImage
        title={`Cutting-Edge Web Apps`}
        heading={`Increase User Interaction With Personalized Web Apps`}
        content={`<p>Connect the dots between an application and a website. You can create strategies lot more quickly and create a more immersive, interesting user experience using web applications.</p><p>Any online application can be readily developed by us to target, engage, and maintain your specialized audience.</p>`}
        button={{
          title: `Learn More`,
          destination: `/web-development`,
        }}
        imageObjectFit={`contain`}
        imageScale={`1.2`}
        image={{
          src: `https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/image%20(1).svg`,
          alt: ``,
        }}
        isCard
        enableCardBorder
        sectionOverflowHidden={false}
        cardBackgroundColor="var(--t-cp-base-white)"
        invertedColumns
        className="b__size-md pt-0"
      />
      <TwoColumnContentWithImage
        title={`Product Design & Branding`}
        heading={`Digital Design`}
        content={`<p>Mosibello transforms your concepts into reality through creative design. We prioritize providing value to mindful brands seeking sustainable growth.</p><p>We provide diverse website design services to assist in establishing your company's distinct identity. Whether you aim to develop a business website, design an eCommerce platform, create a web app, or seek advice from a UI and UX design company for optimal visual, functional, and sustainable solutions.</p>`}
        button={{
          title: `Learn More`,
          destination: `/web-development`,
        }}
        imageObjectFit={`contain`}
        imageScale={`1.5`}
        image={{
          src: `https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/image%20(2).svg`,
          alt: ``,
        }}
        isCard
        enableCardBorder
        cardBackgroundColor="var(--t-cp-base-white)"
        className="b__size-md pt-0"
        sectionOverflowHidden={false}
      />
      <HeadingWithIconCards
        columnClassName="col-md-6 col-lg-4 mb-4"
        className="b__size-md u__border-top"
        headingSize="h2"
        heading="Technologies We Use"
        description={`From the ground up, we can tailor new software and digital products to <br class="u__show-after-992"/>meet your specific needs and requirements.`}
        cardClassName="u__bg-white c__icon-card--with-border"
        cards={[
          {
            iconImage: {
              src: `https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/nextjs-1.svg`,
              alt: ``,
            },
            iconJSX: null,
            heading: `Next.js`,
            description: `Employed by major global corporations, Next.js empowers you to build comprehensive web applications by leveraging the latest React capabilities and incorporating robust Rust-based JavaScript tools for swift builds.`,
            button: null,
          },
          {
            iconImage: {
              src: `https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/f186ec2acff42b736d109e525ba294942a6fe9e3-140x36.svg`,
              alt: ``,
            },
            iconJSX: null,
            heading: `Prismic`,
            description: `Prismic is the headless page builder that lets developers and marketers ship and iterate faster, and build sites that just keep getting better.`,
            button: null,
          },
          {
            iconImage: {
              src: `https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/hubspot.svg`,
              alt: ``,
            },
            iconJSX: null,
            heading: `HubSpot`,
            description: `All the tools you need for marketing, sales, customer service, and content management. HubSpot is a CRM platform that's designed to scale with your business.`,
            button: null,
          },
        ]}
      />
      <CtaBanner className="b__size-md u__bg-primary u__text-inverted" />
    </>
  );
};

export default CustomWebApp;
