


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";


import Homepage from "./Pages/Homepage";
import Aboutus from "./Pages/Aboutus";
import consultationRequest from "./Pages/consultationRequest";
import Information from "./Pages/Information";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/consultationRequest" element={<consultationRequest />} />
        <Route path="/services" element={<Services />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
