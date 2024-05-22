import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import "./App.css"
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <div className="Navbar">
        <Navbar onSelectCategory={setSelectedCategory} />
      </div>
      <div className="Content">
        <Content selectedCategory={selectedCategory} />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;
