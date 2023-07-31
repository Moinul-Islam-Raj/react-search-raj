import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h1>Kazi Abdur Rahman Raz is Dumb.</h1>
      <SearchBar
        title="Google Search"
        url="https://www.google.com/search"
        nameProp="q"
      />
      <SearchBar
        title="Bing Search"
        url="https://www.bing.com/search"
        nameProp="q"
      />
      <SearchBar
        title="YT Search"
        url="https://www.youtube.com/results"
        nameProp="search_query"
      />
      <Counter keys="c-1" />
    </div>
  );
}

export default App;
