import React from "react";

const LoginButton = () => {
  return (
    <a
      href="/login"
      className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 text-center"
    >
      Login
    </a>
  );
};

export default LoginButton;
