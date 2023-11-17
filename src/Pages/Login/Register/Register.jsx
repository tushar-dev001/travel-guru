import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    createUser(data.email, data.password, data.name).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          logOut();
        })
        .then(() => {
          setTimeout(() => {
            
            navigate("/login");
          }, 2000);
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <Helmet>
        <title>Travel Guru || Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-white bg-red-500 p-1 rounded-lg ">
                    Name is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    validateEmail:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-white bg-red-500 p-1 rounded-lg ">
                    Email is required
                  </span>
                )}
                {errors.email?.type === "validateEmail" && (
                  <span className="text-white bg-red-500 p-1 rounded-lg ">
                    Valid Email is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-white bg-red-500 p-1 rounded-lg ">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-white bg-red-500 p-1 rounded-lg">
                    Password must be 6 character
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-white bg-red-500 p-1 rounded-lg">
                    Password less then 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-white bg-red-500 p-1 rounded-lg">
                    Password must be One uppercase, One lowercase, One number
                    and One special Character
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                />
              </div>
              <div className="my-4">
                <p className="">
                  Have not your account? Please{" "}
                  <span className="font-bold text-blue-500">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
