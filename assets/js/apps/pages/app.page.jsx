import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';


const App = ({ path, children }) => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <div className="nav navbar-nav">
            <a className="navbar-brand" href="#">My super redux app</a>
            <Link to="/todo" className={classnames('nav-item nav-link', {active: path == '/todo'})}>Todo</Link>
            <Link to="/coucou" className="nav-item nav-link">Coucou</Link>
          </div>
        </nav>
      </div>
      <div style={{marginTop: '1.5em'}}>
        {children}
      </div>
    </div>
  );
};

const { node } = React.PropTypes;

App.propTypes = {
  children: node
};

export default App;
