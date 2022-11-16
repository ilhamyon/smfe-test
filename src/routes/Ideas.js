import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Posts from "../components/Posts";

const Ideas = () => {
  return (
    <Layout>
      <Banner
        text="Ideas"
        subText="Where all our great things begin"
        image="/images/banner.png"
      />

      <div className="container">
        <Posts />
      </div>
    </Layout>
  );
};

export default Ideas;
