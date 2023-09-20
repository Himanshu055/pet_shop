import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [displayedItems, setDisplayedItems] = useState([]);

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      );
      const data = await res.json();
      setDogs(data);
      setDisplayedItems([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchForDog();
    setSearched(true);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <img
          src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/logo_change.png?v=1682513704"
          className="logo w-32"
          alt="logo"
        />
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <Link to="/" className="text-white text-lg font-bold home">
            Home
          </Link>
          <Link to="/petlist" className="text-white text-lg font-bold animal">
            Dogs
          </Link>
          <Link
            to="/dashboard"
            className="text-white text-lg font-bold home dashlink"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
