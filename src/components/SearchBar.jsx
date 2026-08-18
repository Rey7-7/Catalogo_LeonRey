function SearchBar({ value, onSearchChange }) {
    
  return (
    <div className="search-bar">
      <label htmlFor="product-search">
        Buscar productos
      </label>

      <input
        id="product-search"
        className="search-input"
        type="search"
        placeholder="Ej. hidrolavadora"
        value={value}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar