import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Service from "./routes/Service.jsx";
import Error404 from "./routes/Error404.jsx";
import Signup from "./routes/Signup.jsx";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />

        <Route path="*" element={<Error404 />} />
        <Route path="signup" element={<Signup />} />

      </Routes>
    </div>
  );
}
