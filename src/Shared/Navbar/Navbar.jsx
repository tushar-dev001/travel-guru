import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/destinationDetails">Destination Details</Link>
      </li>
      <li>
        <Link to="/booking">Booking</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          {" "}
          <img src={logo} alt="" className="w-10" /> Travel Guru
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <h3 className="mx-4 font-bold text-xl">{user.displayName}</h3>
            <button
              onClick={handleLogOut}
              className="btn btn-warning font-bold"
            >
              Log Out
            </button>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mx-4"
            >
              <div className="w-10 rounded-full">
                <img alt="user" src={user.photoURL} />
              </div>
            </label>
          </>
        ) : (
          <>
            <button className="btn btn-warning font-bold mx-2">
              <Link to="/register">Register</Link>
            </button>
            <button className="btn btn-warning font-bold">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
