import React from 'react';
import IGLogo from './instagramBanner.jpg';
import './SearchBar.css';


const SearchBar = props => {
  return (
    <div className='search-bar-container'>
      <div className='left-wrapper'>
        <div className='camera'><i class='fa fa-instagram'></i></div>
        <div className='divider'>|</div>
        <img className='banner' src={IGLogo} alt='instagram logo' />
      </div>
      <input type='text' placeholder='🔍Search' />
      <div className='icon-wrapper'>
        <div className='icon'><i class='fa fa-compass'></i></div>
        <div className='icon'><i class='fa fa-heart-o'></i></div>
        <div className='icon'><i class='fa fa-user'></i></div>
      </div>
    </div>
  );
};

export default SearchBar;