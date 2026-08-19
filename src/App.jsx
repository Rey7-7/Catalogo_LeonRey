import './App.css'
import ProductCard from './components/ProductCard'
import { products } from './data/products'
import { useEffect, useState } from 'react'
import { getProducts } from './services/productService'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import { prefetchDNS } from 'react-dom'

function App() {

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
        <h1>Novedades y regalos de TochoMorocho</h1>
        <p>Ofrecemos una gran variedad de productos.</p>
        <p>
          Desde materiales escolares, accesorios para motocicletas,
          electrodomésticos y más.
        </p>
        <p>¡Contamos con servicio a domicilio en todo Altotonga!</p>
      </header>

      <main className='catalog'>
        <h2>Nuestros productos</h2>

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
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              shortDescription={product.shortDescription}
              price={product.price}
              inStock={product.inStock}
              featured={product.featured}
              image={product.image}
            />
          ))}
        </div>
      )}
      </main>

      <footer className='footer'>
        <p>Puedes contactarnos mediante nuestras redes sociales.</p>
        <p>También puedes escribirnos por WhatsApp al número: ...</p>
        <p>Realizamos envíos en Altotonga y sus alrededores.</p>
      </footer>
    </div>
  )
}

export default App
