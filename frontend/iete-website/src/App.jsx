import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Department from "./pages/Department";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Event from "./pages/Event";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/department" element={<Department />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
