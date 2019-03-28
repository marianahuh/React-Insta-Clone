import React from 'react';
import IGLogo from '../../assets/ig_search_bar.png';


const SearchBar = props => {
  return (
    <div className='search-bar-container'>
      <div className='image-wrapper'>
        <img className='logo-img' src={IGLogo} />
      </div>
      <div>
        <input type='text' placeholder='Search' />
      </div>
      <div className='social-wrapper'>
        <div className='social'>
          <i className='fa fa-compass' />
        </div>
        <div className='social'>
          <i className='fa fa-heart' />
        </div>
        <div className='social'>
          <i className='fa fa-circle' />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;