import { Link } from "react-router-dom";
import truncateText from "../Home/TopDestinations/TruncateText";

const DestinationDetailsCard = ({ place }) => {
  const { name, img, description } = place;
  const truncatedDescription = truncateText(description, 100);

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{truncatedDescription}</p>
        <div className="card-actions">
          <Link to={`/placesDetails/${place._id}`}>
            {/* Use _id as the property */}
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsCard;
