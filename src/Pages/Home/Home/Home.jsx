import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import TopDestinations from "../TopDestinations/TopDestinations";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Travel Guru || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <TopDestinations></TopDestinations>
    </div>
  );
};

export default Home;
