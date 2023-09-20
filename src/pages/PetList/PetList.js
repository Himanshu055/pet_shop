import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './PetList.css';

export default function PetList() {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [displayedItems, setDisplayedItems] = useState([]);

  const fetchDogData = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await res.json();

      // Set the "forSale" property to true for all dogs
      data.forEach((dog) => {
        dog.forSale = true; // Assuming all dogs are for sale
      });

      setDogs((prevDogs) => [...prevDogs, ...data]);
      setTotalPages(res.headers.get("X-Total-Pages"));
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (
      !searched &&
      !isLoading &&
      fullHeight - (scrolled + viewportHeight) < 200 &&
      displayedItems.length < dogs.length
    ) {
      setDisplayedItems((prevDisplayedItems) =>
        dogs.slice(0, prevDisplayedItems.length + itemsPerPage)
      );
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

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

  useEffect(() => {
    fetchDogData();
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, searched, displayedItems, dogs]);

  return (
    <>
      <div className="petList">
        <img src="https://headsupfortails.com/cdn/shop/files/top_banner_web_cb3e8b3a-d3be-4eb9-964a-4a1b78630dd3_1500x.jpg?v=1651137218" />
        {!dogs ? (
          <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
            Loading...
          </h1>
        ) : (
          <>
            <section className="p-8 max-w-7xl mx-auto dogsection">
             

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
                {dogs.map((dog) => (
                  <Link to={`/${dog.name}`} key={dog.id} className="card-link">
                    <article className="card">
                      {dog.forSale && (
                       <span className="product-label product-label--on-sale">Dog for Adoption</span>

                      )}
                      <img
                        src={
                          dog.reference_image_id
                            ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
                            : ""
                        }
                        alt={dog.name}
                        loading="lazy"
                        className="card-image"
                      />
                      <div className="card-content">
                        <h3 className="card-title">{dog.name}</h3>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}
