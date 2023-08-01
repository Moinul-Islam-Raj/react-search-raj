import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
        <h3 className="my-2" style={{textAlign: 'center'}}>List of Dumbs</h3>
        <hr />
        <table className="table table-striped table-dark">
          <thead>
            <th scope="col">Name</th>
            <th scope="col">Nick Name</th>
          </thead>
          <tbody>
            <tr>
              <td className="table-item">Kazi Abdur Rahman</td>
              <td className="table-item">Gadha</td>
            </tr>
            <tr>
              <td>Shoshikar Mollik</td>
              <td>Banana</td>
            </tr>
            <tr>
              <td>Ali Altaf Sami</td>
              <td>Poklu</td>
            </tr>
            <tr>
              <td>Omor Faruk</td>
              <td>Khalpha</td>
            </tr>
          </tbody>
        </table>
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
