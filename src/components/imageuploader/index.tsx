import React, { useState } from "react";

const ImageUploader = ({ selectedImages = [], setSelectedImages }: any) => {
  // const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (event: any) => {
    const files = event.target.files;
    setSelectedImages([...selectedImages, ...files]);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md">
      <label htmlFor="imageUpload" className="mb-4">
        <span className="text-lg font-semibold">Upload images:</span>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleImageUpload}
        />
        <div className="mt-2 flex gap-4 flex-wrap">
          {selectedImages?.length > 0 ? (
            selectedImages.map((image: any, index: any) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Selected ${index + 1}`}
                className="w-40 h-40 object-cover rounded m-2"
              />
            ))
          ) : (
            <div className="w-40 h-40 grid place-content-center bg-gray-300 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linejoin="round"
                    d="M12 15V2m0 0l3 3.5M12 2L9 5.5"
                  />
                  <path d="M8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16v-1c0-2.828 0-4.242-.879-5.121c-.768-.768-1.946-.865-4.121-.877m-10 0c-2.175.012-3.353.109-4.121.877C2 10.758 2 12.172 2 15v1c0 2.829 0 4.243.879 5.122c.3.3.662.497 1.121.627" />
                </g>
              </svg>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default ImageUploader;
