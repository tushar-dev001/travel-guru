import { Link, useLoaderData } from "react-router-dom";
import "./Banner.css";
import { useState } from "react";

const Banner = () => {
  const places = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showData, setShowData] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchQuery = form.destination.value;
    setSearchTerm(searchQuery);
    console.log(searchTerm);

    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(filteredPlaces);

    setShowData(filteredPlaces.length === 0);
  };

  return (
    <div>
      <div className="hero md:min-h-[800px] banner-img">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className=" lg:w-[700px]" >
          {/* style={{ width: '700px' }} */}
          <form
            onSubmit={handleSearch}
            className="md:bg-white md:p-6 items-center rounded-lg mx-20 md:mx-0"
          >
            <h3 className="text-3xl my-2 text-white md:text-slate-800">
              Destination
            </h3>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Where to go?"
                name="destination"
                className="p-2 md:p-6 rounded-md placeholder:pl-6 placeholder:text-xl md:w-[600px] mb-4 md:mb-0"
              />
            </div>
            <div>
              <button className="btn btn-warning md:mt-2">Search</button>
            </div>
          </form>

          {/* Display matching places or "No Result Found" */}
          {searchResults.length > 0 &&
            <div className="bg-slate-500 rounded-lg my-2 pb-2">
              <h3 className="text-3xl font-semibold mb-2 text-white p-2 px-2">
                Search Result:
              </h3>
              <ul className="mb-2">
                {searchResults.map((place) => (
                  <li key={place.id} className="bg-green-500 rounded-lg">
                    <Link to={`/placesDetails/${place._id}`}>
                      <h4 className="text-2xl mt-2 border-red-600 p-2 text-white ">{place.name}</h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          }
          {
            showData &&
            <div className="bg-slate-500 rounded-lg my-2 pb-2">
              <h3 className="text-3xl font-semibold mb-2 text-white p-2 px-2">
                No Result Found
              </h3>
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default Banner;
