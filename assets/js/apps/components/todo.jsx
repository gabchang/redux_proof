export default React => (
  ({onClick, completed, text}) => (
    <li onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through': 'none',
          cursor: completed ? 'default' : 'pointer'
        }}>
      {text}
    </li>
  )
);
