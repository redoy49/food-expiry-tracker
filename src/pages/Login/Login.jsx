import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password).then(() => {
      toast.success("Your login successfull!");
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      toast.success("Google Login successfull!");
      navigate(`${location.state ? location.state : "/"}`);
      console.log(result);
    });
  };

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6">Login now</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
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
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
            </div>
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
            className="w-full py-3 bg-slate-600 text-white font-semibold rounded-lg"
          >
            Login
          </button>
        </form>
        <div className="divider">OR</div>
        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            <FcGoogle size={23} />
            <span>Login with Google</span>
          </button>
        </div>
        <p className="text-sm text-center text-gray-600 pt-6">
          Don’t have an account?
          <NavLink
            to="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Create account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
