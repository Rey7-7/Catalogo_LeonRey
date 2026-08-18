function ProductCard({name, shortDescription, price, inStock, featured, image}){

const phoneNumber = '5210000000000'

const message = `Hola, me interesa el producto ${name} con precio de $${price}.`

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <article className={featured ? 'product-card product-card--featured' : 'product-card'}>
            {featured && (<span className="featured-badge">Destacado</span>)}
            <img 
            className="product-image"
            src={image}
            alt={name}
            />
            <h3>{name}</h3>
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