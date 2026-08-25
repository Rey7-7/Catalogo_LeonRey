import '../App.css'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { getProducts } from '../services/productService'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import { prefetchDNS } from 'react-dom'

function CatalogPage() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = products.filter((product) => {
    const nombre = product.name.toLowerCase()
    const busqueda = searchTerm.toLowerCase()
    
    const matchesCategory = selectedCategory === 'all' || selectedCategory === product.category
    const matchesSearch = nombre.includes(busqueda)

    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    async function loadProducts(){
      try
      {
       const data = await getProducts()
       setProducts(data)
      }
      catch(error)
      {
        console.error(error)
        setError("No fue posible cargar los productos.")
      }
      finally
      {
        setLoading(false)
      }
    }
      loadProducts()
  }, [])
 
  return (
    <div className='app'>
      <header className='header'>
       <div className="header-content"></div>
        <p className="header-eyebrow">Directo hasta tu puerta</p>
        
        <h1>Novedades y regalos DeTochoMorocho</h1>

        <p className="header-description">
          Encuentra artículos para el hogar, electrónica, accesorios,
          herramientas y más.
        </p>
        
        <p className="header-delivery">
          Servicio a domicilio en Altotonga y sus alrededores.
        </p>
      </header>

      <main className='catalog' id="catalog">
        <h2>Explorar productos</h2>

        <div className="catalog-filters">
          <SearchBar
            value={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <CategoryFilter
            value={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {loading ? (
          <p>Cargando productos...</p>
        ) : error ? (
          <p>{error}</p>
        ) : products.length === 0 ? ( 
          <p>No hay productos disponibles por el momento.</p>
        ) : filteredProducts.length === 0 ? (
          <p>No encontramos productos que coincidan con “{searchTerm}”.</p>
        ) : (
        <div className="product-list">
          {filteredProducts.map((product) => {
            
            return (
            <ProductCard
              key={product.id}
              name={product.name}
              shortDescription={product.shortDescription}
              price={product.price}
              inStock={product.inStock}
              featured={product.featured}
              image={product.image}
              slug={product.slug}
            />
            )
          })}
        </div>
      )}
      </main>

      <footer className='footer'>
        <p>Tambien puedes contactarnos mediante nuestras redes sociales: </p>
        <a>Ejemplo</a>
        <p>Recuerda que solo realizamos envíos en Altotonga y sus alrededores.</p>
      </footer>
    </div>
  )
}

export default CatalogPage
