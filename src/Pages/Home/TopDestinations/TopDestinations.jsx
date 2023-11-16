// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import TopDestinationsCard from "./TopDestinationsCard";
import { useLoaderData } from "react-router-dom";

const TopDestinations = () => {
  // const [places, setPlaces] = useState([]);
  const place = useLoaderData()
  // const places = place.destinations
  console.log(place);

  // useEffect(() => {
  //   fetch("destinations.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPlaces(data.destinations);
  //       console.log(data.destinations);
  //     });
  // }, []);

  return (
    <div>
      <SectionTitle subHeading={"Destination"} heading={"Top Destination"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          place.map(place => <TopDestinationsCard key={place._id} place={place}></TopDestinationsCard>)
        }
      </div>
    </div>
  );
};

export default TopDestinations;
