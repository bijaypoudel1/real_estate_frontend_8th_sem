import React from "react";
import Image from "next/image";
import home from "../../assets/images/home.webp";
import house from "../../assets/images/hosue.jpeg";
import royal from "../../assets/images/royal.webp";

const PropertyViewDetails = () => {
  const propertyData = {
    id: 1,
    title: "Beautiful Home with a View",
    description:
      "This is a stunning property with breathtaking views of the mountains.",
    price: "$500,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sqft",
    location: "1234 Elm Street, City, State",
    image: "https://example.com/property-image.jpg",
    amenities: ["Swimming Pool", "Garden", "Garage", "Fireplace"],
    features: [
      "Large Windows",
      "Hardwood Flooring",
      "Walk-in Closets",
      "Modern Kitchen",
      "Central Heating",
    ],
    locationMapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7067.669736922424!2d84.42826287646595!3d27.660580294073362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1689903523824!5m2!1sen!2sbd",
    galleryImages: [home, house, royal],
    videoUrl: "https://www.youtube.com/embed/your-video-id",
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Thank you for your interest! We will get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white rounded-lg mb-10 shadow-lg">
        {/* Property Images Gallery */}
        <h1 className="my-2 text-3xl text-center font-bold">Property Galery</h1>
        <div className="grid grid-cols-3 mt-4 gap-2 rounded-t-lg overflow-hidden">
          {propertyData.galleryImages.map((image, index) => (
            <div key={index} className="relative w-full h-full">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-t-lg h-full w-full"
              />
            </div>
          ))}
        </div>
        {/* Property Details */}

        <div className="px-6 py-4">
          <div className="px-6 py-4">
            <div className="mb-6">
              <h1 className="text-3xl font-bold">{propertyData.title}</h1>
              <p className="text-gray-600">{propertyData.description}</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold">
                ${propertyData.price}
              </span>
              <span className="mx-2 text-gray-600">|</span>
              <span className="text-gray-600">
                {propertyData.bedrooms} beds | {propertyData.bathrooms} baths |{" "}
                {propertyData.area}
              </span>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">{propertyData.location}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <ul className="list-disc list-inside">
                {propertyData.amenities.map((amenity, index) => (
                  <li key={index} className="text-gray-700 mb-1">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside">
                {propertyData.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Property Location Map */}
          <div className="mt-6 rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold mb-2">Location Map</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Property Location"
                src={propertyData.locationMapUrl}
                frameBorder="0"
                allowFullScreen
                className="w-full h-[80vh] rounded-lg"
              ></iframe>
            </div>
          </div>
          {/* Video Tour */}
          <div className="mt-6 rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold mb-2">Video Tour</h2>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/293438220?h=b5c09b6116&title=0&byline=0&portrait=0"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          {/* Social Media Sharing Buttons */}
          <div className="mt-6 flex space-x-2">
            <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
              Share on Facebook
            </button>
            <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 15v4h4v-4m0 0l-2-2m2 2l2-2m-2 2l-2 2m2-2l2 2m7-5a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Share on Twitter
            </button>
          </div>
          {/* Contact Form */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Interested in this property? Fill out the form below, and we'll
              get back to you!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-purple-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-purple-300"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-purple-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="mt-1 px-4 py-2 w-full border rounded-md resize-none focus:ring focus:ring-purple-300"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 mb-10 py-2 text-base font-semibold text-white bg-purple-700 rounded-md hover:bg-purple-800 focus:outline-none focus:ring focus:ring-purple-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyViewDetails;
