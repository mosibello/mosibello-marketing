import CtaBanner from "@/components/blocks/ctas/CtaBanner";
import HeadingWithIconCards from "@/components/blocks/features/HeadingWithIconCards";
import TwoColumnContentWithImage from "@/components/blocks/features/TwoColumnContentWithImage";
import SpotlightHero from "@/components/blocks/heroes/SpotlightHero";
import TestimonialBanner from "@/components/blocks/testimonials/TestimonialBanner";

const WebDevelopment = () => {
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
        heading={`Advantages Over Competitors and Other Benefits`}
        description={`Collaborating closely, Mosibello designers and skilled software engineers <br class="u__show-after-992" />provide exceptional tailored web development solutions, ensuring your <br class="u__show-after-992" />competitiveness and delivering multiple benefits.`}
        columnClassName="col-md-6 col-lg-4 mb-4"
        cardClassName="u__bg-white c__icon-card--with-border"
        cards={[
          {
            iconJSX: `<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.1299 13.8H11.5C11.7357 13.8 11.8536 13.8 11.9268 13.8732C12 13.9464 12 14.0643 12 14.3V18.7299C12 19.6205 12 20.0659 12.1962 20.1091C12.3925 20.1523 12.5795 19.7482 12.9537 18.9399L15.6851 13.0402C16.2768 11.7621 16.5726 11.1231 16.2777 10.6615C15.9828 10.2 15.2786 10.2 13.8701 10.2H12.5C12.2643 10.2 12.1464 10.2 12.0732 10.1268C12 10.0536 12 9.9357 12 9.7V5.27013C12 4.37946 12 3.93413 11.8038 3.89091C11.6075 3.8477 11.4205 4.25182 11.0463 5.06006L8.31493 10.9597C7.72321 12.2379 7.42735 12.8769 7.72228 13.3385C8.01721 13.8 8.72143 13.8 10.1299 13.8Z" fill="#222222" /> </svg>`,
            heading: `Optimal Performance`,
            description: `Jamstack websites serve as ideal solutions to enhance both web speed and software performance.`,
            button: null,
          },
          {
            iconJSX: `<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" clipRule="evenodd" d="M2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V8C22 5.17157 22 3.75736 21.1213 2.87868C20.2426 2 18.8284 2 16 2H8C5.17157 2 3.75736 2 2.87868 2.87868ZM17.8321 9.5547C18.1384 9.09517 18.0142 8.4743 17.5547 8.16795C17.0952 7.8616 16.4743 7.98577 16.1679 8.4453L13.1238 13.0115L12.6651 12.094C11.9783 10.7205 10.0639 10.6013 9.2121 11.8791L6.16795 16.4453C5.8616 16.9048 5.98577 17.5257 6.4453 17.8321C6.90483 18.1384 7.5257 18.0142 7.83205 17.5547L10.8762 12.9885L11.3349 13.906C12.0217 15.2795 13.9361 15.3987 14.7879 14.1209L17.8321 9.5547Z" fill="#222222" /> </svg>`,
            heading: `Enhancement of SEO ranking`,
            description: `Utilizing contemporary, swift, and distinctive software and websites, businesses can attain elevated conversion rates and enhance their capabilities in SEO ranking.`,
            button: null,
          },
          {
            iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"> <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" /> </svg>`,
            heading: `Environmentally Friendly Web Design and Development`,
            description: `We operate within the Agile development framework, minimizing waste. Our goal is to craft environmentally friendly websites through optimization and the use of efficient programming languages.`,
            button: null,
          },
          {
            iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"> <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" /> <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clipRule="evenodd" /> </svg>`,
            heading: `Simple to Scale`,
            description: `Our digital products and software systems are poised for expansion. We continuously strive to enhance current solutions and the overall development process.`,
            button: null,
          },
          {
            iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z" clipRule="evenodd" />
          </svg>
          `,
            heading: `Simple to Maintain`,
            description: `We can effectively handle the maintenance of software for particular users, functions, or businesses across various industries, as well as elevate existing software to a higher standard.`,
            button: null,
          },
          {
            iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
          </svg>
          `,
            heading: `Simple to Edit`,
            description: `As we don't provide pre-made software solutions, our custom development and integration services enable the adaptation of the product to your present requirements.`,
            button: null,
          },
        ]}
      />
      <TestimonialBanner
        heading={`We were thoroughly impressed with the work. Mosibello comprehends the essentials of delivering a contemporary, resilient website that aligns with the needs of both the business and the users. The striking final appearance is no mere coincidence!`}
        className="b__size-md pt-0"
        name="Mason Reynolds"
        title="Senior Digital Experience Manager @ Alpha Solutions"
        bannerBackgroundHex={`#000`}
      />
      <TwoColumnContentWithImage
        title={null}
        titleColor={`u__heading-color--primary`}
        heading={`Our Development Procedure is Robust and Thorough.`}
        content={`<p>We can modify our process or engage with other widely used frameworks based on client requirements. Right from the project's initiation, we ensure full project transparency and multiple channels of open communication.</p>`}
        button={{
          title: `Learn More`,
          destination: `/web-development`,
        }}
        enableCardBorder
        className="b__size-md u__border-top"
        cardBackgroundColor="var(--t-cp-base-white)"
        isCard
        imageObjectFit={`contain`}
        imageScale={`1.05`}
        image={{
          src: `https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/Login%20-%20web.svg`,
          alt: ``,
        }}
      />
      <TwoColumnContentWithImage
        title={null}
        titleColor={`u__heading-color--primary`}
        heading={`Custom Software Solutions Tailored to your Business Needs`}
        content={`<p>
        We handle the entire software development cycle, from research and design to coding. Tailoring new software and digital products from scratch to meet your specific needs.</p>`}
        button={{
          title: `Learn More`,
          destination: `/web-development`,
        }}
        enableCardBorder
        className="b__size-md pt-0"
        cardBackgroundColor="var(--t-cp-base-white)"
        isCard
        imageObjectFit={`contain`}
        imageScale={`1.05`}
        image={{
          src: `https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/Kanban%20board.svg`,
          alt: ``,
        }}
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

export default WebDevelopment;
