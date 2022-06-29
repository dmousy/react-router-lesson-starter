import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";
import ProfileEditForm from "../components/EditProfileForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>  
      <Header />
      <main>
      <Routes>
        <Route path="/articles/:title" element={<Article />} />
        <Route path="/authors/:name" element={<Author />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEditForm />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
