import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Hero from "../../component/Hero";

export default function Home() {
  return (
    <div>
      <Navbar isLoggedIn={false} /> {/* Shows Login / Signup */}
      <Hero />
      <Footer />
    </div>
  );
}



//These will make up my homepage
//This contains nav + hero + body

// the entry will be from the home page, where we have access to login and signup and then i used the landing page as the logout section. 