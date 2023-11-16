
import "./Banner.css";

const Banner = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    const from = event.target;
    const destination = from.destination.value;
    const activity = from.activity.value;
    const date = from.date.value;
    console.log(destination, activity, date);
  };

  return (
    <div>
      <div className="hero min-h-[800px] banner-img">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className=" bg-slate-500 w-48" style={{width:'700px'}}>
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
