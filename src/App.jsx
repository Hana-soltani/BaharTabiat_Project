
// import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './Components/Header'
// import Footer from './Components/Footer'

// import Homepage from './Pages/Homepage'
// import Aboutus from './Pages/Aboutus'
// import ConsultationRequest from './Pages/consultationRequest';
// import Information from './Pages/Information';
// import Services from './Pages/Services';


// function App() {


//   return (
//      <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<Aboutus />} />
//         <Route path="/consultationRequest" element={<ConsultationRequest/>} />
//         <Route path="/services" element={< Services />} />
//         <Route path="/Information" element={<Information/>} />

//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


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
