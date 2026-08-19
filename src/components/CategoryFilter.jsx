const categories = [
  { value: 'all', label: 'Todas las categorías' },
  { value: 'electronics', label: 'Electrónica' },
  { value: 'home', label: 'Hogar' },
  { value: 'tools', label: 'Herramientas' },
  { value: 'personal-care', label: 'Cuidado personal' },
  { value: 'accessories', label: 'Accesorios' },
  { value: 'school', label: 'Escolares' },
  { value: 'other', label: 'Otros' },
]

function CategoryFilter({ value, onCategoryChange }) {
  return (
    <div className="category-filter">
      <label htmlFor="category-select">
        Categoría
      </label>

      <select
        id="category-select"
        className="category-select"
        value={value}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        {categories.map((category) => (
          <option
            key={category.value}
            value={category.value}
          >
            {category.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategoryFilter