
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./Banner.css";
import { useState } from "react";

const Banner = () => {
  const places = useLoaderData()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const specifiqPlace = useParams()

  const handleSearch = (event) => {
    event.preventDefault();
    const from = event.target;
    const searchQuery = from.destination.value;
    console.log(searchQuery);
    setSearchTerm(searchQuery)

    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setSearchResults(filteredPlaces)

  };

  return (
    <div>
      <div className="hero min-h-[800px] banner-img">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="  w-48" style={{width:'700px'}}>
          <form
            onSubmit={handleSearch}
            className=" md:bg-white md:p-6 items-center  rounded-lg"
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

          {/* Display matching places */}
          {searchResults.length > 0 && (
            <div className=" bg-slate-500 rounded-lg my-2 pb-2">
              <h3 className="text-3xl font-semibold mb-2 text-white p-2 px-2">
                Search Result:
              </h3>
              <ul className="mb-2">
                {searchResults.map((place) => (
                  <li key={place.id} className="bg-green-500 rounded-lg">
                    <Link to={`/placesDetails/${place._id}`}>
                    <h4 className="text-2xl mt-2 border-red-600 p-2 text-white ">{place.name}</h4>
                    </Link>
                    {/* <p>{place.description}</p> */}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Banner;
