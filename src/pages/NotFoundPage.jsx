import { Link } from "react-router"

function NotFoundPage(){

    return(
        <main className="product-detail-page">
            <section className="product-detail-state product-detail-state--empty">
                <div>
                <h1>Página no encontrada</h1>

                <p>La dirección que intentaste visitar no existe.</p>

                <Link className="product-detail-back" to="/">
                    ← Volver al catálogo
                </Link>
                </div>
            </section>
        </main>
    )
}

export default NotFoundPage