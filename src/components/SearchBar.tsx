import { useRef, useState } from "react";
import "./css/searchBar.css";


const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  //const id = Math.random()*1000
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
    }
  ]

  const [engine, setEngine] = useState(engines[2])

  function clear(e: React.MouseEvent) {
    if(searchRef.current?.value == '') e.preventDefault()
    setTimeout(() => {
    if(searchRef.current == null) return
    searchRef.current.value = ''
    })
  }
  return (
    <>
      <select name="search-val" id="">
        <option onClick={() => {setEngine(engines[0])}} className="" value="1">Google</option>
        <option onClick={() => {setEngine(engines[1])}} className="" value="2">Bing</option>
        <option onClick={() => {setEngine(engines[2])}} className="" value="3">YouTube</option>
      </select>
      
      <form className="search-form" action={engine.url} target="_blank">
        <label style={{display:'b'}} htmlFor={"search-bar"}>{engine.title}</label>
        <div>
          <input
            ref={searchRef}
            id={"search-bar"} 
            type="search" 
            name={engine.name} 
            className='search-input'
            placeholder="Search"
          />
          <input onClick={clear} type="submit" className="search-submit" value="Search" />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
