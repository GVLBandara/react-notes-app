import React from 'react'
import { MdSearch, MdClear } from 'react-icons/md'

const Search = ({ handleSearch }) => {

  const handleSearchText = (event) => {
    handleSearch(event.target.value);
  }

  const clearText = () => {
    document.getElementById('searchText').value = '';
    handleSearch('')
  }

  return (
    <div className='search'>
      <MdSearch className='search-icon' size='1.3em' />
      <input
      id='searchText'
        type='text'
        placeholder='Type to search'
        onChange={handleSearchText} />
      <MdClear className='clear-icon' size='1.3em' onClick={clearText}/>
    </div>
  )
}

export default Search