import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import CharacterForm from "./components/CharacterForm";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/create" element={<CharacterForm />} />
        <Route path="/edit/:id" element={<CharacterForm isEditMode={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
