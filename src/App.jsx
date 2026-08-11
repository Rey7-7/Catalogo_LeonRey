import './App.css'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

function App() {

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

        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              inStock={product.inStock}
              featured={product.featured}
              image={product.image}
            />
          ))}
        </div>

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
