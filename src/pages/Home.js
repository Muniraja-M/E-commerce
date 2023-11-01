// Home.js
import React, { useState } from "react";
import { useProducts } from "../api";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import { searchProducts } from "../utils";

function Home() {
  const { data: products, isLoading, isError } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products</div>;
  }

  const filteredProducts = searchProducts(products, searchQuery);

  return (
    <div>
      <h1>Product Listing Page</h1>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Home;
