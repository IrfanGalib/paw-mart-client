import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      await signInUser(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You are now logged in.",
        showConfirmButton: false,
        timer: 2000,
      });

      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message || "Invalid email or password.",
      });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google Sign-In Success:", result.user);
        const userPayload = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userPayload),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User Save/Update Data:", data);

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
            console.error("DB Sync Error:", dbError);
            Swal.fire({
              icon: "warning",
              title: "Login Successful",
              text: "Signed in with Google, but failed to sync profile data.",
            });
            navigate("/");
          });
      })
      .catch((authError) => {
        console.error("Google Auth Error:", authError);
        Swal.fire({
          icon: "error",
          title: "Authentication Failed",
          text: authError.message || "Could not sign in with Google.",
        });
      });
  };

  return (
    <div>
      <div className="hero bg-gradient-to-r from-blue-600 via-indigo-700 to-indigo-900 min-h-screen ">
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl ">
          <form onSubmit={handleEmailPasswordLogin} className="card-body">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">Login</h1>
              <div>
                <p className="text-center my-3">
                  Don't have an account?{" "}
                  <Link to="/register" className="link link-primary font-bold">
                    Register here
                  </Link>
                </p>
              </div>

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
                className="w-full btn btn-neutral mt-6 bg-white border-dashed border-[#002855] text-[#002855] hover:bg-[#002855] hover:text-white"
              >
                Login
              </button>
            </div>

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
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
