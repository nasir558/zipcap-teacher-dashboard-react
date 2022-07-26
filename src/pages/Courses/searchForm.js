import React from "react";
import SearchIcon from "../../assets/images/search.png";

const SearchForm = () => {
  return (
    <div className="searchForm">
      <div className="grid grid-cols-1 mt-8 lg:mt-0 lg:grid-cols-2 xl:grid-cols-3">
        <div>
          <form className="flex flex-row boxShadow maxWidth-344px">
            <input type="text" name="" placeholder="Search course" className="text-sm px-2.5 outline-none flex-grow transition-all duration-300" />
            <button type="submit" className="red2Bg px-4 hover:bg-black transition-all duration-300">
              <img src={SearchIcon} alt="search icon" aria-hidden="true" className="w-22px flex-shrink-0 h-auto" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
