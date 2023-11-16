import { Link } from "react-router-dom";
import truncateText from "./TruncateText";

const TopDestinationsCard = ({place}) => {
  const {name, description, img} = place

  const truncatedDescription = truncateText(description, 100)

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="place" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{name}</h2>
          <p className="text-xl my-2">{truncatedDescription}</p>
          <div className="card-actions">
            <Link to={'/destinationDetails'}>
            <button className="btn btn-primary">Go to Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinationsCard;
