import React from 'react';
import Profile from './app.profile.jsx';
import Menu from './app.menu.jsx';

const Nav = ({ location }) => {
  return (
    <nav id="menu">
      <div id="nav-top">
        <a className="nav-brand" href="/">RedUX</a>
        <Profile className="m-t-1"/>
      </div>
      <Menu location={location}/>
    </nav>
  );
};

const { node } = React.PropTypes;

Nav.propTypes = {
  children: node
};

export default Nav;
