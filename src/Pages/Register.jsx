import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import Swal from "sweetalert2";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await AuthService.register(
        user.username,
        user.email,
        user.password
      );
      if (register.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Registration",
          text: register.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "User Registration",
        text: error.response.data.message || error.message,
      });
    }
  };

  const handleCancel = () => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
    navigate("/"); // Navigate to the home page on cancel
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Register
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handleSubmit}
            >
              Register
            </button>
            <button
              type="button"
              className="w-full bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ml-4"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
