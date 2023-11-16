import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlacesDetails = () => {
  const { placeId } = useParams();
  console.log(placeId);
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/places/${placeId}`);
        const data = await response.json();
        console.log(data);
        setPlaceDetails(data);
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    };

    fetchPlaceDetails();
  }, [placeId]);

  if (!placeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold ml-10 my-10 bg-slate-500 p-2 rounded-lg text-white">{placeDetails.name}</h2>
        <div className="w-[900px] mx-auto">
        <img src={placeDetails.img} alt="No Image Found" />
        </div>
      <div className="flex justify-center mt-10">
        <div className="w-1/2 ">
        <p className="text-lg  px-10">{placeDetails.description}</p>
        </div>
        <div className="w-1/2">
            adfdaf
        </div>
      </div>
    </div>
  );
};

export default PlacesDetails;
