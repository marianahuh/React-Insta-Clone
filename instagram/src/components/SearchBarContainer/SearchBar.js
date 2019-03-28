import React from 'react';

import IGLogo from '../../assets/instagramBanner.jpg';
import './SearchBar.css';


const SearchBar = props => {
  return (
    <div className='search-bar-container'>
      <div className='banner-wrapper'>
        <div className='camera'>
          <i className="fab fa-instagram"></i>
          <div>|</div>
          <img className='banner' src={IGLogo} />
        </div>
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