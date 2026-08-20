import { useParams } from "react-router"

function ProductDetailPage() {
  const { slug } = useParams()

  return(
     <main>
        <h1>Detalle del producto</h1>
        <p>Slug actual: {slug}</p>
     </main>
    )
 }

export default ProductDetailPage