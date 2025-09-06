import { useState } from "react";
import headerbg from "../../assets/headerbg.png";
import BhLogo from "../../assets/BhLogo.png";

 function Navbar() {
   const [showMenu, setShowMenu] = useState(false);
   const [bedrooms, setBedrooms] = useState(0);

   return (
     <div
       className="bg-cover bg-center h-[40rem] relative"
       style={{ backgroundImage: `url(${headerbg})` }}
     >
       <nav className="bg-transparent shadow-none">
         <div className="max-w-6xl mx-auto px-4 py-6">
           <div className="flex justify-between items-center">
             {/* Logo + primary nav */}
             <div className="flex space-x-7 items-center">
               <div>
                 <a href="#" className="flex items-center">
                   <div className="bg-green-500 rounded-full flex items-center justify-center h-6 w-6">
                     <img
                       src={BhLogo}
                       alt="BetaHouse Logo"
                       className="h-3 w-4"
                     />
                   </div>
                   <span
                     className="font-normal text-lg"
                     style={{ color: "#F5f5f5" }}
                   >
                     BetaHouse
                   </span>
                 </a>
               </div>

               {/* Primary nav links */}
               <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                 <a
                   href="#"
                   className="py-4 px-2 font-normal hover:text-green-400 transition duration-300"
                   style={{ color: "#F5F5F5" }}
                 >
                   Home
                 </a>
                 <a
                   href="#"
                   className="py-4 px-2 font-normal hover:text-green-400 transition duration-300"
                   style={{ color: "#F5F5F5" }}
                 >
                   Properties
                 </a>
                 <a
                   href="#"
                   className="py-4 px-2 font-normal hover:text-green-400 transition duration-300"
                   style={{ color: "#F5F5F5" }}
                 >
                   Agents
                 </a>
                 <a
                   href="#"
                   className="py-4 px-2 font-normal hover:text-green-400 transition duration-300"
                   style={{ color: "#F5F5F5" }}
                 >
                   Contact
                 </a>
               </div>
             </div>

             {/* Right: Logout Button + Name */}
             <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
               <button
                 onClick={() => {
                   localStorage.removeItem("token");
                   localStorage.removeItem("username"); // This clears stored user data if there is any 
                   window.location.href = "/auth/login"; // redirect to login
                 }}
                 className="py-2 px-4 font-medium text-white bg-red-500 rounded hover:bg-red-400 transition duration-300"
               >
                 Logout
               </button>
             </div>

             {/* Mobile menu button */}
             <div className="md:hidden flex items-center">
               <button
                 onClick={() => setShowMenu(!showMenu)}
                 className="outline-none"
               >
                 <svg
                   className="w-6 h-6 text-white"
                   fill="none"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path d="M4 6h16M4 12h16M4 18h16"></path>
                 </svg>
               </button>
             </div>
           </div>
         </div>

         {/* Mobile Menu */}
         {showMenu && (
           <div className="md:hidden mobile-menu bg-green-100/80 rounded shadow-md text-green-700">
             <ul className="pt-2 pb-3">
               <li>
                 <a href="#" className="block pl-4 pr-4 py-2">
                   Home
                 </a>
               </li>
               <li>
                 <a href="#" className="block pl-4 pr-4 py-2">
                   Properties
                 </a>
               </li>
               <li>
                 <a href="#" className="block pl-4 pr-4 py-2">
                   Agents
                 </a>
               </li>
               <li>
                 <a href="#" className="block pl-4 pr-4 py-2">
                   Contact
                 </a>
               </li>
               {/* Avatar also in mobile menu */}
               <li className="mt-2 flex items-center space-x-2 pl-4 pr-4 py-2">
                 <img
                   src="/assets/avatar.png"
                   alt="User Avatar"
                   className="h-8 w-8 rounded-full border-2 border-green-500"
                 />
                 <span className="font-semibold text-green-700">
                   Obi Sussana Nnenna
                 </span>
               </li>
             </ul>
           </div>
         )}
       </nav>

       {/* Mid-Hero Section remains same */}
       <section className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white">
         <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white p-10 text-center">
           <h1 className="text-4xl md:text-5xl font-bold">
             Browse Our Properties
           </h1>
           <p className="mt-4 text-x opacity-90 text-normal">
             Find your perfect home among our curated properties. Start
             <br />
             browsing now!
           </p>
         </div>
         {/* Search Bar stays the same... */}
         
       </section>
     </div>
   );
 }

 export default Navbar;

 
