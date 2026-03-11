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
      className="flex md:gap-x-3 items-center md:justify-between  w-full rounded-l-full bg-[#ECCFA56B]"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
        className="outline-none    py-3 px-5 "
      />
      <button type="submit" className="greenButton">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
