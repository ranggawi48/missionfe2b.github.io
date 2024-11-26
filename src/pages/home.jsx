import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Elements/NavigationBar";
import Banner from "../components/Elements/Banner";
import Movie from "../components/Elements/Movie";
import Footer from "../components/Elements/Footer";
import { ProfileProvider } from "../context/ProfileContext";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated !== "true") {
      alert("Silakan login terlebih dahulu.");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="h-screen bg-background overflow-auto md:overflow-auto">
      <ProfileProvider>
      <Navbar />
      </ProfileProvider>
      <Banner />
      <Movie />
      <Footer />
    </div>
  );
};

export default HomePage;
