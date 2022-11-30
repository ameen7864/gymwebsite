import "./styles.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Program from "./Components/Programs/Program";
import Region from "./Components/Region/Region";
import Plandetails from "./Components/Plandetails/Plandetails";
import Testimonal from "./Components/Testimonal/Testimonal";
import Join from "./Components/Join/join";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Program />
      <Region />
      <Plandetails />
      <Testimonal />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
