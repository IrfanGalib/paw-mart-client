import React, { useContext, useState } from "react";

import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { signInWithGoogle, createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    return null;
  };

  const handleEmailPasswordRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, photoURL } = formData;

    const validationError = validatePassword(password);
    if (validationError) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: validationError,
      });
      return;
    }

    try {
      const result = await createUser(email, password);
      console.log("Firebase user:", result.user);

      const newUser = { name, email, image: photoURL };

      const res = await fetch(
        "https://paw-mart-server-theta.vercel.app/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error("Database save failed");
      }

      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "Your account has been created.",
        showConfirmButton: false,
        timer: 2000,
      });

      navigate("/");
    } catch (error) {
      console.error("Registration Error:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message || "Unknown error occurred.",
      });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);

        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        fetch("https://paw-mart-server-theta.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.success) {
              throw new Error("DB save failed");
            }

            Swal.fire({
              icon: "success",
              title: "Login Successful!",
              text: "Signed in with Google.",
              showConfirmButton: false,
              timer: 1500,
            });

            navigate("/");
          })
          .catch((dbError) => {
            console.error("Database Save Error:", dbError);
            Swal.fire({
              icon: "warning",
              title: "Login Successful, DB Save Failed",
              text: "You are logged in, but data was not saved.",
            });
            navigate("/");
          });
      })
      .catch((authError) => {
        Swal.fire({
          icon: "error",
          title: "Authentication Failed",
          text: authError.message,
        });
      });
  };

  return (
    <div>
      <div className="hero bg-gradient-to-r from-blue-600 via-indigo-700 to-indigo-900 min-h-screen ">
        <div className="card bg-base-100 my-20 mx-auto w-full max-w-sm shrink-0 shadow-2xl ">
          <form onSubmit={handleEmailPasswordRegister} className="card-body">
            <fieldset className="fieldset">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <div>
                <p className="text-center my-3">
                  Already have an account?{" "}
                  <Link to="/login" className="link link-primary font-bold">
                    Login Now
                  </Link>
                </p>
              </div>

              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />

              {/* Image-URL */}
              <label className="label">Image URL (Optional)</label>
              <input
                type="url"
                name="photoURL"
                className="input input-bordered"
                placeholder="Your Image URL"
                value={formData.photoURL}
                onChange={handleFormChange}
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="Password"
                value={formData.password}
                onChange={handleFormChange}
                required
              />

              <div>
                <a href="#" className="link link-hover">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-neutral mt-6 bg-white border-dashed border-[#002855] text-[#002855] hover:bg-[#002855] hover:text-white"
              >
                Register
              </button>
            </fieldset>
            <div className="divider">OR</div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#002855] border-2 hover:bg-gray-50"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
