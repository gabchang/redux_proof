const { Link } = require('react-router');
const { connect } = require('react-redux');
const { pushPath } = require('redux-simple-router');

export default React => {

  const App = ({ pushPath, children }) => {
    return (
      <div>
        <header>
          Links:
          {' '}
          <Link to="/todo">Todo</Link>
          {' '}
          <Link to="/foo">Foo</Link>
          {' '}
          <Link to="/bar">Bar</Link>
        </header>
        <div>
          <button onClick={() => pushPath('/foo')}>Go to /foo</button>
        </div>
        <div style={{marginTop: '1.5em'}}>{children}</div>
      </div>
    );
  };

  const { func, node } = React.PropTypes;

  App.propTypes = {
    pushPath: func.isRequired,
    children: node
  };

  return connect(null, { pushPath })(App);
};
