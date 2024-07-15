import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss";
import Layout from "@/components/wrappers/Layout";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import { Inter } from "next/font/google";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Mosibello fallback",
    description: page.data.meta_description || "Description fallback!",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  };
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Layout>{children}</Layout>
          <PrismicPreview repositoryName={repositoryName} />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
