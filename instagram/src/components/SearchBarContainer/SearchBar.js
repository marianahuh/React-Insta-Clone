import React from 'react';
import IGLogo from './instagramBanner.jpg';
import './SearchBar.css';
import styled from 'styled-components';


const Container = styled.div
  `
  border-bottom: 1px solid #3333;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
 `;

const LogoWrapper = styled.div
  `
  display: flex;
  justify-content: space-evenly;
 `;


const Camera = styled.div
  `
  font-size: 31px;
  padding-top: 3%;
`;

const Divider = styled.span
  `
  font-size: 35px;
  color: gray;
  font-weight: lighter;
  text-align: center;
  padding-left: 7%;
  padding-right: 6%;
`;

const Banner = styled.img
  `
  height: 30px;
 `;

const InputWrapper = styled.div
  `
  display: flex;
  margin: auto;
`;

const InputSearch = styled.input
  `
  text-align: center;
  width: 290px;
  padding-left: 2%;
  padding-right: 2%;
`;

const IconsWrapper = styled.div
  `
  display: flex;
  flex-direction: row;
  font-size: 30px;
`;

const Icon = styled.div
  `
  padding-right: 21%;
  font-size: 20px;
  color: darkgray;
  width: 20px;
  height: 20px;
`;

const SearchBar = props => {
  return (
    <Container>
      <LogoWrapper>
        <Camera><i className='fab fa-instagram' /></Camera>
        <Divider>|</Divider>
        <Banner src={IGLogo} alt='instagram logo' />
      </LogoWrapper>
      <InputWrapper>
        <InputSearch type='text' placeholder='🔍Search' onKeyDown={props.searchPosts} />
      </InputWrapper>
      <IconsWrapper>
        <Icon className='icon'><i className='far fa-compass' /></Icon>
        <Icon className='icon'><i className='far fa-heart-o' /></Icon>
        <Icon className='icon'><i className='far fa-user-o' /></Icon>
      </IconsWrapper>
    </Container>
  );
};

export default SearchBar;