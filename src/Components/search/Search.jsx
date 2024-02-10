import React, { useEffect, useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { getLocation } from './loactionAPI'

function Search({setCoordinate}) {
  
  const[search, setSearch] = useState(null)

  function handleOnChange(input) {
    setSearch(input);
    setCoordinate(input);
  }

  async function loadOptions2(inputValue) {
    try {
      const result = await getLocation(inputValue);
      return {
        options : result
      };
    } catch (error) {
      // console.error(error);
    }
  }

  return (
    <AsyncPaginate 
        placeholder ="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions2}
    />
  )
}

export default Search