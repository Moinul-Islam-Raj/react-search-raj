import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h1>Kazi Abdur Rahman is Dumb.</h1>
      <SearchBar
        title="Roogle Search"
        url="https://www.google.com/search"
        nameProp="q"
      />
      <SearchBar
        title="Raj Bing Search"
        url="https://www.bing.com/search"
        nameProp="q"
      />
      <SearchBar
        title="Raj YT Search"
        url="https://www.youtube.com/results"
        nameProp="search_query"
      />
      <Counter keys="c-1" />
      <h6>
        Made By <em>Moinul Islam Raj</em>
      </h6>
    </div>
  );
}

export default App;
