import Layout from "@/components/Layout";
import SimpleError from "@/components/blocks/errors/SimpleError";

const NotFound = () => {
  return (
    <>
      <Layout>
        <SimpleError className="b__size-lg" />
      </Layout>
    </>
  );
};

export default NotFound;
