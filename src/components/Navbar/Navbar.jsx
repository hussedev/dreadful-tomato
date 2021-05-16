import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderContainer,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';

import iconFilter from '../../assets/icon-filter.png';
import iconLogin from '../../assets/icon-login.png';
import iconMovies from '../../assets/icon-movies.png';
import iconSeries from '../../assets/icon-series.png';
import logo from '../../assets/logo.png';
import IconButton from '../IconButton';
import './Navbar.scss';

const Navbar = ({ currentPage }) => {
  const handleFilterClick = () => {};
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header className='navbar' aria-label='Dreadful Tomato'>
          <SkipToContent />
          <HeaderMenuButton
            aria-label='Open menu'
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderNavigation aria-label='Menu'>
            <HeaderMenuItem element={Link} to='/'>
              <img src={logo} alt='logo' />
            </HeaderMenuItem>
            {currentPage !== '/' && (
              <IconButton
                currentPage={currentPage}
                link='/movies'
                kind='ghost'
                title='Movies'
                icon={iconMovies}
              />
            )}
            {currentPage !== '/' && (
              <IconButton
                currentPage={currentPage}
                link='/series'
                kind='ghost'
                title='Series'
                icon={iconSeries}
              />
            )}
          </HeaderNavigation>

          <HeaderNavigation aria-label='Options Menu'>
            {currentPage !== '/' && (
              <IconButton
                currentPage={currentPage}
                onClick={handleFilterClick}
                type='click'
                kind='ghost'
                title='Filters'
                icon={iconFilter}
              />
            )}
            <IconButton
              link='/'
              kind='ghost'
              title='Login'
              icon={iconLogin}
              reverse={true}
            />
            <HeaderMenuItem element={Link} to='/'>
              <div className='trial-btn'>
                <p>Start your free trial</p>
              </div>
            </HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label='Side navigation'
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem element={Link} to='/'>
                  Home
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to='/movies'>
                  Movies
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to='/series'>
                  Series
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </Header>
      )}
    />
  );
};

export default Navbar;
