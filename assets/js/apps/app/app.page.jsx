import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

const { node } = React.PropTypes;


const App = ({ location, children }) => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <div className="nav navbar-nav">
            <a className="navbar-brand" href="#">My super redux app</a>
            <Link to="/todo" className={classnames('nav-item nav-link', {active: isActive(location, 'todo') })}>Todo</Link>
            <Link to="/reddit" className={classnames('nav-item nav-link', {active: isActive(location, 'reddit') })}>Reddit</Link>
            <Link to="/github" className={classnames('nav-item nav-link', {active: isActive(location,  'github') })}>Github</Link>
          </div>
        </nav>
      </div>
      <div style={{marginTop: '3.5em'}}>
        {children}
      </div>
    </div>
  );
};


App.propTypes = {
  children: node
};


function isActive(location, rootPath) {
  const { pathname } = location;
  const splitPath = pathname.split('/');
  return splitPath.length >= 1 ? splitPath[1] === rootPath : false;
}

export default App;
