import { Routes, Route } from 'react-router'
import CatalogPage from './pages/CatalogPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />

      <Route
        path="/productos/:slug"
        element={<ProductDetailPage />}
      />
    </Routes>
  )
}

export default App