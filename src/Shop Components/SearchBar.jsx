import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex md:gap-x-3 items-center md:justify-between  w-full rounded-full bg-[#ECCFA56B]"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
        className="outline-none    py-3 px-2 md:px-5 "
      />
      <button
        type="submit"
        className="greenButton text-xs md:text-xl font-inter font-semibold"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
