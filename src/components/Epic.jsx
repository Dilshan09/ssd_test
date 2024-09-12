import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const EPICImages = () => {
  const epicApi = "https://api.nasa.gov/EPIC/api/natural/images";
  const apiKey = "qDIvJaK7d6inIVi5eOk1lSqfvTaRjdeHFodze0QN";
  const imagesPerPage = 8;

  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  const fetchEPICImages = () => {
    setLoading(true);
    fetch(`${epicApi}?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch EPIC images");
        }
        return response.json();
      })
      .then((data) => {
        setImageData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching EPIC images:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to fetch EPIC images. Please try again later.",
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEPICImages();
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  // Filter images based on selected date
  const filteredImages = selectedDate
    ? imageData.filter((image) => image.date === selectedDate)
    : imageData;

  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setCurrentPage(1); // Reset to first page when date changes
  };

  console.log("currentImages:", currentImages);

  return (
    <>
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
            EPIC Images
          </h2>
          <div className="mt-6">
            <input
              type="date"
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {currentImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                    src={`https://epic.gsfc.nasa.gov/archive/natural/${image.date.slice(0, 10).replace(/-/g, '/')}/png/${image.image}.png`}
                    alt={`EPIC Image ${index}`}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <p className="text-gray-800 font-bold">Date: {image.date}</p>
                    <p className="text-gray-600">Caption: {image.caption}</p>
                </div>
                </div>
            ))}
            </div>
            {loading && <p className="text-center mt-4">Loading...</p>}
            <div className="flex justify-center mt-8">
              <nav aria-label="Pagination">
                <ul className="flex">
                  {Array.from({ length: Math.ceil(filteredImages.length / imagesPerPage) }, (_, i) => (
                    <li key={i}>
                      <button
                        onClick={() => paginate(i + 1)}
                        className={`mx-1 px-3 py-2 rounded-md ${
                          currentPage === i + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EPICImages;
