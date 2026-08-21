import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getProductBySlug } from "../services/productService"
import { Link } from "react-router"

function ProductDetailPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const phoneNumber = '5210000000000'

  useEffect(() => {
      async function loadProduct(){
         setLoading(true)
         setError(null)
         setProduct(null)

        try
        {
         const data = await getProductBySlug(slug)
         setProduct(data)
        }
        catch(error)
        {
          console.error(error)
          setError("No fue posible cargar el producto.")
        }
        finally
        {
          setLoading(false)
        }
      }
        loadProduct()
    }, [slug])

   const whatsappUrl = product
   ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
         `Hola, me interesa el producto ${product.name} con precio de $${product.price}.`
      )}`
   : '#'
  
  return (
   <main className="product-detail-page">
      {loading ? (
         <section className="product-detail-state">
         <p>Cargando producto...</p>
         </section>
      ) : error ? (
         <section className="product-detail-state product-detail-state--error">
         <p>{error}</p>
         </section>
      ) : product === null ? (
         <section className="product-detail-state product-detail-state--empty">
         <p>No se encontró el producto.</p>
         </section>
      ) : (
         <article className="product-detail">
            <Link className = "product-detail-back" to="/">
               ← Volver al catálogo
            </Link>

            {product.images?.length > 0 ? (
               <div className="product-detail-gallery">
                  {product.images.map((image, index) => (
                  <img
                     key={image._key}
                     className="product-detail-image"
                     src={image.url}
                     alt={image.alt || `${product.name}, imagen ${index + 1}`}
                     loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  ))}
               </div>
            ) : (
               <div className="product-detail-no-image">
                  Este producto no tiene imágenes.
               </div>
            )}
         
          <div className="product-detail-content">
            <h1>{product.name}</h1>

            <p className="product-detail-description">
               {product.description}
            </p>

            <p className="product-detail-price">
               Precio: ${product.price}
            </p>

            <p
               className={
                  product.inStock
                  ? 'product-detail-stock product-detail-stock--available'
                  : 'product-detail-stock product-detail-stock--unavailable'
               }
            >
               {product.inStock ? 'Disponible' : 'Agotado'}
            </p>

            <div className="product-detail-actions">
               {product.inStock ? (
                  <a
                     className="product-link"
                     href={whatsappUrl}
                     target="_blank"
                     rel="noreferrer"
                  >
                     Consultar por WhatsApp
                  </a>
               ) : (
                  <span className="product-link product-link--disabled">
                     Producto agotado
                  </span>
               )}
               </div>
          </div>
         </article>
      )}
   </main>
   )
 }

export default ProductDetailPage