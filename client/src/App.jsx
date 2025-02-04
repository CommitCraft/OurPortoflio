import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
