import React from "react";
import { Input } from "web3uikit";



const SearchBar = () => {
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div className="flex justify-center px-9 mr-5">
        <Input
          label="Search Notes"
          name="Search Notes"
          prefixIcon="search"
          labelBgColor="#141d26"
          onSearch={onSearch}
        ></Input>
      </div>
    </>
  );
};

export default SearchBar;
