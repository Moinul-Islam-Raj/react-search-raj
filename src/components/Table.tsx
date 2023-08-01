const Table = () => {
  return (
    <table className="table table-striped table-dark table-focusable">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Nick Name</th>
        </tr>
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
          <td>Khalipha</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table