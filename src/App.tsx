import Counter from "./components/Counter";
import Table from './components/Table'
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h3 className="my-2" style={{textAlign: 'center'}}>List of Dumbs</h3>
      <hr />
      <Table></Table>
        
      <h3 style={{textAlign: 'center'}}>Searches</h3>
      <hr />
      <SearchBar />

      <h3 className="mt-2" style={{textAlign: 'center'}}>Counter</h3>
      <hr />
      <Counter keys="c-1" />
      <div style={{display:'flex', justifyContent:'center'}}>
        <em style={{fontSize: '2rem'}}>Moinul Islam Raj</em>
      </div>
    </div>
  );
}

export default App;
