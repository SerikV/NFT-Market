import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Hero from "../components/hero/Hero";
import BestOfWeek from "../components/bestofweek/BestOfWeek";
import Create from "../components/createsection/Create";
import Popular from  '../components/popularsection/Popular';
import Subscription from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";
import AboutSection from "../components/aboutsection/AboutSection";


const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  const styles = {
    background: "linear-gradient(to right, #031e39, #00010d)",
    // Додайте інші стилі, які вам потрібні для вашого компонента Home
  };

  return (
    <div style={styles}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AboutSection darkMode={darkMode} />
      <BestOfWeek darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Create darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Popular darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Subscription darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Додайте інші компоненти, які вам потрібні */}

    </div>
  );
};

export default Home;
