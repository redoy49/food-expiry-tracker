import React from "react";
import { NavLink, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, googleLogin, manageProfile } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      toast.success("Login with Google successful");
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photourl.value;
    console.log(name, email, password, photoUrl);

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain one lowercase letter.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must at least 6 digit.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Your Registration successful!");

        manageProfile(name, photoUrl).then(() => {
          navigate(`${location.state ? location.state : "/"}`);
        });
      })
      .catch(() => {
        toast.error("Your register failed");
      });
  };

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-2">Create account</h2>
        <p className="text-sm text-gray-600 mb-6">
          Already have an account?
          <NavLink
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login now
          </NavLink>
        </p>

        <form onSubmit={handleRegistration} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photourl"
              id="photourl"
              required
              placeholder="Photo URL"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center relative">
              <input
                name="password"
                id="password"
                required
                placeholder="******"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-violet-700"
          >
            Register
          </button>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="flex items-center justify-center w-full gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          <FcGoogle size={23} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
