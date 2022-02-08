import React from "react";

const Error = ({ message }) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 mb-3 uppercase font-bold rounded-md">
      <p>{message}</p>
    </div>
  );
};

export default Error;
