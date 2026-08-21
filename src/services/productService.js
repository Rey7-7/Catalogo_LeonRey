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

const PRODUCT_BY_SLUG_QUERY = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    shortDescription,
    description,
    price,
    inStock,
    featured,
    category,
    "images" : images[] {
        _key,
        alt,
        "url": asset->url,
    }
  }
`

export async function getProducts(){
    const products = await sanityClient.fetch(PRODUCTS_QUERY)

    return products
}

export async function getProductBySlug(slug){
    const productBySlug = await sanityClient.fetch(PRODUCT_BY_SLUG_QUERY, {
        slug: slug,
    })
    return productBySlug
}

