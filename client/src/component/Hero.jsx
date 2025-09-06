import { useState } from "react";
import {
  MapPinIcon,
  ShareIcon,
  HeartIcon,
  PhotoIcon,
  VideoCameraIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { BedDouble, Bath } from "lucide-react";
import line1 from "../assets/line1.png";
import line11 from "../assets/line11.png";
import line111 from "../assets/line111.png";
import line2 from "../assets/line2.png";
import line22 from "../assets/line22.png";
import line222 from "../assets/line222.png";
import line3 from "../assets/line3.png";
import line33 from "../assets/line33.png";
import line333 from "../assets/line333.png";

function Hero() {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  // All properties data
  const allProperties = [
    {
      id: 1,
      image: line1,
      title: "Real House Luxury Villa",
      location: "Victoria Island, Lagos",
      price: "₦3,340,000,000",
      bedrooms: 6,
      bathrooms: 3,
    },
    {
      id: 2,
      image: line11,
      title: "Exquisite Haven Villa",
      location: "Festac, Lagos",
      price: "₦4,000,000/1 Year",
      bedrooms: 5,
      bathrooms: 3,
    },
    {
      id: 3,
      image: line111,
      title: "Luxe Palatial Villa",
      location: "Gbagada, Lagos",
      price: "₦5,350,000,000",
      bedrooms: 7,
      bathrooms: 3,
    },
    {
      id: 4,
      image: line2,
      title: "Harmony Luxury Villa",
      location: "Munshin, Lagos",
      price: "₦4,000,000/1 Years",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 5,
      image: line22,
      title: "Real House Luxury Villa",
      location: "Victoria Island, Lagos",
      price: "₦350,000,000",
      bedrooms: 6,
      bathrooms: 4,
    },
    {
      id: 6,
      image: line222,
      title: "Real House Luxury Villa",
      location: "Lekki-Ajah, Lagos",
      price: "₦4,200,000/1 Year",
      bedrooms: 5,
      bathrooms: 3,
    },
    {
      id: 7,
      image: line3,
      title: "Infinite Bliss Villa",
      location: "Ishiagu, Enugu",
      price: "₦2,350,000,000",
      bedrooms: 5,
      bathrooms: 3,
    },
    {
      id: 8,
      image: line33,
      title: "Real House Luxury Villa",
      location: "Works Layout, Owerri",
      price: "₦350,000,000/1 Year",
      bedrooms: 8,
      bathrooms: 6,
    },
    {
      id: 9,
      image: line333,
      title: "Real House Luxury Villa",
      location: "Ikeja, Lagos",
      price: "₦600,000,000",
      bedrooms: 6,
      bathrooms: 6,
    },
    {
      id: 10,
      image: line2,
      title: "Harmony Luxury Villa",
      location: "Munshin, Lagos",
      price: "₦4,000,000/1 Years",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 11,
      image: line22,
      title: "Real House Luxury Villa",
      location: "Victoria Island, Lagos",
      price: "₦350,000,000",
      bedrooms: 6,
      bathrooms: 4,
    },
    {
      id: 12,
      image: line222,
      title: "Real House Luxury Villa",
      location: "Lekki-Ajah, Lagos",
      price: "₦4,200,000/1 Year",
      bedrooms: 5,
      bathrooms: 3,
    },
    {
      id: 13,
      image: line3,
      title: "Infinite Bliss Villa",
      location: "Ishiagu, Enugu",
      price: "₦2,350,000,000",
      bedrooms: 5,
      bathrooms: 3,
    },
    {
      id: 14,
      image: line33,
      title: "Real House Luxury Villa",
      location: "Works Layout, Owerri",
      price: "₦350,000,000/1 Year",
      bedrooms: 8,
      bathrooms: 6,
    },
    {
      id: 15,
      image: line333,
      title: "Real House Luxury Villa",
      location: "Ikeja, Lagos",
      price: "₦600,000,000",
      bedrooms: 6,
      bathrooms: 6,
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(allProperties.length / propertiesPerPage);

  // Get current properties
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = allProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // Change page functions
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-md overflow-hidden relative"
          >
            {/* Image with badges */}
            <div className="relative">
              <img
                src={property.image}
                alt="House"
                className="h-48 w-full object-cover"
              />
              {/* Featured Badge */}
              <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
                Featured
              </span>
              {/* For Sale Badge */}
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                For Sale
              </span>

              {/* Overlay Icons */}
              <div className="absolute bottom-2 right-2 flex space-x-2">
                <button className="bg-white p-2 rounded-lg shadow">
                  <LinkIcon className="h-4 w-4 text-gray-600" />
                </button>
                <button className="bg-white p-2 rounded-lg shadow">
                  <VideoCameraIcon className="h-4 w-4 text-gray-600" />
                </button>
                <button className="bg-white p-2 rounded-lg shadow">
                  <PhotoIcon className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Property Details */}
            <div className="p-4">
              <h3 className="font-bold text-lg">{property.title}</h3>
              <p className="text-gray-500 flex items-center text-sm mt-1">
                <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
                {property.location}
              </p>

              {/* Beds & Baths */}
              <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
                <span className="flex items-center">
                  <BedDouble className="h-4 w-4 mr-1 text-gray-400" />{" "}
                  {property.bedrooms} Bedrooms
                </span>
                <span className="flex items-center">
                  <Bath className="h-4 w-4 mr-1 text-gray-400" />{" "}
                  {property.bathrooms} Bathrooms
                </span>
              </div>

              {/* Price + Actions */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-green-700 font-bold text-lg">
                  {property.price}
                </p>
                <div className="flex items-center space-x-4 text-gray-500">
                  <ShareIcon className="h-5 w-5 cursor-pointer" />
                  <HeartIcon className="h-5 w-5 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-700 transition duration-200"
        >
          &lt;
        </button>

        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-700 transition duration-200"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Hero;

// import {
//   MapPinIcon,
//   ShareIcon,
//   HeartIcon,
//   PhotoIcon,
//   VideoCameraIcon,
//   LinkIcon,
// } from "@heroicons/react/24/outline";
// // i installed "lucide-react" and "@heroicons/react" so i can use the transparent love emoji and share icons
// import { BedDouble, Bath } from "lucide-react";
// import line1 from "../assets/line1.png";
// import line11 from "../assets/line11.png";
// import line111 from "../assets/line111.png";
// import line2 from "../assets/line2.png";
// import line22 from "../assets/line22.png";
// import line222 from "../assets/line222.png";
// import line3 from "../assets/line3.png";
// import line33 from "../assets/line33.png";
// import line333 from "../assets/line333.png";
// import p from "../assets/p.png";

// function Hero() {
//   return (
//     //  The Properties Grid
//     <section className="container mx-auto py-12 px-4">
//       {/* <h2 className="text-2xl font-bold mb-6">Featured Properties</h2> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Property Card */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative">
//           {/* Image with badges */}
//           <div className="relative">
//             <img src={line1} alt="House" className="h-48 w-full object-cover" />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Real House Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Victoria Island, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 6 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 3 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">₦3,340,000,000</p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 2 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line11}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Exquisite Haven Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Festac, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 5 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 3 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">
//                 ₦4,000,000/1 Year
//               </p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 3 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line111}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Luxe Palatial Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Gbagada, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 7 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 3 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">₦5,350,000,000</p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 4 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img src={line2} alt="House" className="h-48 w-full object-cover" />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Harmony Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Munshin, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 4 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 3 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">
//                 ₦4,000,000/1 Years
//               </p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 5 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line22}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Real House Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Victoria Island, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 6 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 4 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">₦350,000,000</p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* HOUSE 6 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line222}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Real House Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Lekki-Ajah, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 5 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 3 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">
//                 ₦4,200,000/1 Year
//               </p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 7 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img src={line3} alt="House" className="h-48 w-full object-cover" />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Infinite Bliss Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Ishiagu, Enugu
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 5 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 3 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">₦2,350,000,000</p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 8 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line33}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Real House Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Works Layout, Owerri
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 8 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 6 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">
//                 ₦350,000,000/1 Year
//               </p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 9 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line333}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Real House Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Ikeja, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 6 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 6 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">₦600,000,000</p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* extra Houses to equal 15 */}
//         {/* HOUSE 4 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img src={line2} alt="House" className="h-48 w-full object-cover" />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Harmony Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Munshin, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 4 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 3 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">
//                 ₦4,000,000/1 Years
//               </p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 5 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line22}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Real House Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Victoria Island, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 6 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 4 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">₦350,000,000</p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* HOUSE 6 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line222}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Real House Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Lekki-Ajah, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 5 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 3 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">
//                 ₦4,200,000/1 Year
//               </p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 7 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img src={line3} alt="House" className="h-48 w-full object-cover" />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Infinite Bliss Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Ishiagu, Enugu
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 5 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 3 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">₦2,350,000,000</p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 8 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line33}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Real House Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Works Layout, Owerri
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 8 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 6 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">
//                 ₦350,000,000/1 Year
//               </p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HOUSE 9 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden relative mt-6">
//           {/* Image with badges */}
//           <div className="relative">
//             <img
//               src={line333}
//               alt="House"
//               className="h-48 w-full object-cover"
//             />
//             {/* Featured Badge */}
//             <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
//               Featured
//             </span>
//             {/* For Sale Badge */}
//             <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               For Sale
//             </span>

//             {/* Overlay Icons */}
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <LinkIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <VideoCameraIcon className="h-4 w-4 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-lg shadow">
//                 <PhotoIcon className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="p-4">
//             <h3 className="font-bold text-lg">Real House Luxury Villa</h3>
//             <p className="text-gray-500 flex items-center text-sm mt-1">
//               <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
//               Ikeja, Lagos
//             </p>

//             {/* Beds & Baths */}
//             <div className="flex items-center space-x-4 text-gray-600 mt-2 text-sm">
//               <span className="flex items-center">
//                 <BedDouble className="h-4 w-4 mr-1 text-gray-400" /> 6 Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <Bath className="h-4 w-4 mr-1 text-gray-400" /> 6 Bathrooms
//               </span>
//             </div>

//             {/* Price + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-green-700 font-bold text-lg">₦600,000,000</p>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <ShareIcon className="h-5 w-5 cursor-pointer" />
//                 <HeartIcon className="h-5 w-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full flex justify-center mt-8 ">
//         <img src={p} alt="Pagination" className="h-6  " />
//       </div>
//     </section>
//   );
// }

// export default Hero;
