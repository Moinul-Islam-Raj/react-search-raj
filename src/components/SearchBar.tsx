import "./css/searchBar.css";

interface Props {
  title?: string;
  url: string;
  nameProp: string;
}

const clearInputs = () => {};

const SearchBar = ({ url, nameProp, title = "Search" }: Props) => {
  return (
    <>
      <form
        onSubmit={clearInputs}
        id="search-google"
        action={url}
        target="_blank"
      >
        <div>
          <label>{title}</label>
          <input type="search" name={nameProp} id="g-search-bar" />
          <input type="submit" className="submit-search" />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
