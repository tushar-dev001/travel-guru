import { useLoaderData } from "react-router-dom";
import DestinationDetailsCard from "./DestinationDetailsCard";
import { Helmet } from "react-helmet-async";

const DestinationDetails = () => {
  const places = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Travel Guru || Destination</title>
      </Helmet>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {places.map((place) => (
        <DestinationDetailsCard
          key={place._id}
          place={place}
        ></DestinationDetailsCard>
      ))}
    </div>
    </div>
  );
};

export default DestinationDetails;
