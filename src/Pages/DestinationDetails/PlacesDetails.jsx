import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const PlacesDetails = () => {
  const { placeId } = useParams();
  console.log(placeId);
  const [placeDetails, setPlaceDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await fetch(
          `https://travel-web-app-server-bqbrtekmu-tushari789.vercel.app/${placeId}`
        );
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

  const handleSubmitDate = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const date = from.date.value;
    const bookingData = { name, email, date };

    axios.post("http://localhost:5000/bookings", bookingData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Booking Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      from.reset();
      setTimeout(() => {
        navigate("/destinationDetails");
      }, 2000);
    });
  };

  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold ml-10 my-10 bg-slate-500 p-2 rounded-lg text-white">
        {placeDetails.name}
      </h2>
      <div className="w-[900px] mx-auto">
        <img src={placeDetails.img} alt="No Image Found" />
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-3/4 ">
          <p className="text-lg  px-10">{placeDetails.description}</p>
        </div>
        <div className="">
          <form onSubmit={handleSubmitDate}>
            <div>
              <h3 className="text-2xl font-bold">Name</h3>
              <input type="text" name="name" className="p-2 rounded-lg my-2" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Email</h3>
              <input type="text" name="email" className="p-2 rounded-lg my-2" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Date</h3>
              <input
                type="date"
                name="date"
                id=""
                className="p-2 px-8 rounded-lg mt-2"
              />
            </div>
            <input
              type="submit"
              value="Booking"
              className="btn btn-warning mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlacesDetails;
