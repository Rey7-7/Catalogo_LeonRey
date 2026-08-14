import { sanityClient } from "../sanity/client";

const PRODUCTS_QUERY = `
*[_type == "product"]
    | order(featured desc, name asc){
        _id,
        name,
        "slug" : slug.current,
        shortDescription,
        price,
        inStock,
        featured,
        category,
        "image": images[0].asset->url,
        "imageAlt": images[0].alt
    }
`

export async function getProducts(){
    const products = await sanityClient.fetch(PRODUCTS_QUERY)

    return products
}