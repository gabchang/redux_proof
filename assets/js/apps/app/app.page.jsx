import React from 'react';
import Nav  from './app.nav.jsx';

const App = ({ location, children }) => {
  return (
      <div className="wrapper">
        <Nav location={location}/>
        <div id="main">
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
