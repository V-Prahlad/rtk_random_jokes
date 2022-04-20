import { useGetUserQuery } from './redux/rtk';
import './App.css';

function App() {
  const { data, error, isLoading, isSuccess, refetch } = useGetUserQuery();

  const handleClick = () => {
    refetch();
  };

  return (
    <div className="container">
      {isLoading && <h1>... Loading Data</h1>}
      {error && <h1>.. Error</h1>}
      {isSuccess && (
        <div className="joke">
          <span>{data?.value}</span>
        </div>
      )}
      <button onClick={handleClick}>Next Joke</button>
    </div>
  );
}

export default App;
