import { useRef, useState } from "react";
import "./css/searchBar.css";


const engines = [
  {
    url:'https://www.google.com/search',
    name: 'q',
    title: 'Google Search',
  },
  {
    url:'https://www.bing.com/search',
    name: 'q',
    title: 'Bing Search',
  },
  {
    url:'https://www.youtube.com/results',
    name: 'search_query',
    title: 'YouTube Search',
  },
  {
    url:'https://www.yahoo.com/search',
    name: 'q',
    title: 'Yahoo! Search',
  }
  ]
const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const [engine, setEngine] = useState(engines[0])

  function clear(e: React.MouseEvent) {
    if(searchRef.current?.value == '') e.preventDefault()
    setTimeout(() => {
      if(searchRef.current == null) return
      searchRef.current.value = ''
    })
  }
  return (
    <div className="container-fluid pb-3">
      <form className="search-form my-3" action={engine.url} target="_blank">
        <div>
          <input
            ref={searchRef}
            id={"search-bar"} 
            type="search" 
            name={engine.name} 
            className='search-input'
            placeholder={engine.title}
          />
          <input onClick={clear} type="submit" className="search-submit" value="Search" />
        </div>
      </form>
      <select className="select-search mx-2" onChange={(e) => {
        setEngine(engines[Number(e.currentTarget.value)])
      }}
      name="search-val" id="select-engine"
      >
        {engines.map((engine, i) => <option key={i} value={i}>{engine.title}</option>)}
      </select>
    </div>
  );
};

export default SearchBar;
