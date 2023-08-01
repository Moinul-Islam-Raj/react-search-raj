import Counter from "./components/Counter";
import VideoSir from "./components/VideoSir";
import Table from './components/Table'
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <SearchBar/>

      <h3 className="mt-2" style={{textAlign: 'center'}}>List of Dumbs</h3><hr />
      <Table></Table>  

      <h3 className="mt-2">Counter</h3><hr />
      <Counter keys="c-1" />

      <h3>Aslam Sir's Thing</h3><hr />
      <VideoSir/>

      <div style={{display:'flex', justifyContent:'center'}}>
        <em style={{fontSize: '2rem'}}>Moinul Islam Raj</em>
      </div>
    </>
  );
}

export default App;
