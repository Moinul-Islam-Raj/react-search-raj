import Counter from "./components/Counter";
import VideoSir from "./components/VideoSir";
import Table from './components/Table'
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <SearchBar/>

      <h3 className="mt-2" style={{textAlign: 'center'}}>List of People</h3><hr />
      <Table></Table>  

      <h3>Aslam Sir's Thing</h3><hr />
      <VideoSir/>

      <h3 className="mt-2">Counter</h3><hr />
      <Counter keys="c-1" />

      <div style={{display:'flex', justifyContent:'center'}}>
        <em style={{fontSize: '2rem', fontFamily:'cursive'}}>Moinul Islam Raj</em>
      </div>
      
        <ul className="list-unstyled">
          <li>Some Links</li>
          <ul>
            <li><a href="https://www.github.com/Moinul-Islam-Raj/" className="list-links">My Github Page</a></li>
            <li><a href="https://www.facebook.com/69Raj69/" className="list-links">My Facebook Page</a></li>
          </ul>
        </ul>
    </>
  );
}

export default App;
