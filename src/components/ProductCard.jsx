import { Link } from "react-router"

function ProductCard({name, shortDescription, price, inStock, featured, image, slug}){

const phoneNumber = '5210000000000'
const message = `Hola, me interesa el producto ${name} con precio de $${price}.`
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
const isFeatured = featured && inStock

    return (
        <article className={isFeatured ? 'product-card product-card--featured' : 'product-card'}>
            {isFeatured && (<span className="featured-badge">Destacado</span>)}
            <img 
            className="product-image"
            src={image}
            alt={name}
            />
            <h3>
                <Link
                className="product-card-link"
                to={`/productos/${slug}`}
                >
                {name}
                </Link>
            </h3>
            <p>{shortDescription}</p>
            <p className="product-price">Precio: ${price}</p>
            {inStock ? (
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
        </article>
    )
}

export default ProductCard