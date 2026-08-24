import { Routes, Route } from 'react-router'
import CatalogPage from './pages/CatalogPage'
import ProductDetailPage from './pages/ProductDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />

      <Route
        path="/productos/:slug"
        element={<ProductDetailPage />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App