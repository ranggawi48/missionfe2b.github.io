import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Elements/NavigationBar";
import Footer from "../components/Elements/Footer";
import Profile from "../components/Elements/Profile";
import { ProfileProvider } from "../context/ProfileContext";

const ProfilePage = () => {
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
      <Profile />
      </ProfileProvider>
      <Footer />
    </div>
  );
};

export default ProfilePage;
