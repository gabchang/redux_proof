import reactStamp from 'react-stamp';

export default React => {
  const {
    func, bool, string
  } = React.PropTypes;

  return reactStamp(React)
    .compose({
      propTypes: {
        onClick   : func.isRequired,
        completed : bool.isRequired,
        text      : string.isRequired
      },

      render() {
        const {completed, text, onClick} = this.props;

        return (
          <li onClick={ onClick }
            style={{
              textDecoration: completed ? 'line-through': 'none',
              cursor: completed ? 'default' : 'pointer'
            }}>
            {text}
          </li>
        );
      }
    });
};
