import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Hello from App</h1>
      <Link to='/profile'>Go to Profile</Link>
    </div>
  );
};

export default App;