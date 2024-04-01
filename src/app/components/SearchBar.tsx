'use client'
import React, { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import { Popover, Button, TextInput } from "@mantine/core";
import { getRecipes } from '../api/getRecipes'; //importing the API func

const SearchBar: React.FC = () => {

  //Creating a function to filter the data and then display the searched for data 
  

  return (
    <>
      <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button>
            <IoMdSearch size={20} />
          </Button>
        </Popover.Target>
        <Popover.Dropdown
         className="h-96 rounded-xl">
          <TextInput
            label="Search"
            description="Seach for a recipe"
            placeholder="Search...."
          />
          <div>
          
          </div>
        </Popover.Dropdown>
      </Popover>
    </>
  );
}

export default SearchBar
