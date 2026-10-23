
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CollectionDetails from "./pages/CollectionDetails.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route
            path="/collection/:collectionId"
            element={<CollectionDetails />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
