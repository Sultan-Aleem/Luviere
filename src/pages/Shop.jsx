import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ShopHeader from "../Shop Components/ShopHeader";
import ShopPage from "../Shop Components/ShopPage";
import { useState } from "react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All products");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Nav />
      <main>
        <ShopHeader
          onCategorySelect={setSelectedCategory}
          onSearch={setSearchQuery}
        />
        <ShopPage
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          onCategorySelect={setSelectedCategory} // for desktop sidebar clicks
          onSearch={setSearchQuery}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
