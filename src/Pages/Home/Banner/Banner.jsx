import { FaCalendar, FaFlag, FaLocationArrow } from "react-icons/fa6";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[600px] banner-img">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className=" ">
            <form className="md:flex md:gap-16 md:bg-white md:p-6 items-center md:mt-72 rounded-lg">
              <div>
                <h3 className="text-xl my-2 text-slate-800">Destination</h3>
                <div className="flex items-center">
                  <FaLocationArrow className="absolute mx-2 mb-4 md:mb-0" />
                  <input
                    type="text"
                    placeholder="Where to go?"
                    name="destination"
                    className="p-2 rounded-md placeholder:pl-6 md:w-64 mb-4 md:mb-0"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl my-2 text-slate-800">Type</h3>
                <div className="flex items-center">
                  <FaFlag className="absolute mx-2 mb-4 md:mb-0" />
                  <input
                    type="text"
                    placeholder="Activity"
                    name="activity"
                    className="p-2 rounded-md placeholder:pl-6 md:w-64 mb-4 md:mb-0"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl my-2 text-slate-800">When</h3>
                <div className="flex items-center">
                  <FaCalendar className="absolute mx-2 mb-4 md:mb-0" />
                  <input
                    type="date"
                    placeholder="Date"
                    name="when"
                    className="p-2 rounded-md placeholder:pl-6 w-48 md:w-64 mb-4 md:mb-0"
                  />
                </div>
              </div>
              <div>
                <button className="btn btn-warning md:mt-9">Search</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
