import React, { useState } from "react";
import Swal from "sweetalert2";

const Earth = () => {
  const earthApi = "https://api.nasa.gov/planetary/earth/assets";
  const apiKey = "qDIvJaK7d6inIVi5eOk1lSqfvTaRjdeHFodze0QN";

  // State variables to hold longitude and latitude values
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  // Function to handle fetching Earth image
  const sendfetch = () => {
    fetch(
      `${earthApi}?lon=${longitude}&lat=${latitude}&date=2018-01-01&dim=0.10&api_key=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Earth image");
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          imageUrl: data.url,
        });
      })
      .catch((error) => {
        console.error("Error fetching Earth image:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to fetch Earth image. Please try again later.",
        });
      });
  };

  return (
    <>
      <div className="flex items-center justify-center h-full mt-6">
        <div className="max-w-md w-full">
          {/* Longitude Dropdown */}
          <select
            className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          >
            <option value="">Select Longitude</option>
            {/* Add options for longitude values */}
            <option value="-90">-90</option>
            <option value="-89">-89</option>
            {/* Add more options as needed */}
          </select>

          {/* Latitude Dropdown */}
          <select
            className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          >
            <option value="">Select Latitude</option>
            {/* Add options for latitude values */}
            <option value="30">30</option>
            <option value="31">31</option>
            {/* Add more options as needed */}
          </select>

          {/* Fetch Button */}
          <button
            id="submit"
            onClick={sendfetch}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
            style={{ opacity: 0.7 }}
          >
            Fetch Earth Image
          </button>
        </div>
      </div>
    </>
  );
};

export default Earth;
