import {defineField, defineType } from 'sanity';

export const productType = defineType({
    name: 'product',
    title: 'Producto',
    type: 'document',

    groups: [
        {
        name: 'information',
        title: 'Información',
        default: true,
        },
        {
        name: 'sales',
        title: 'Venta',
        },
        {
        name: 'media',
        title: 'Imágenes',
        },
    ],

    fields: [
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
            group: 'information',
            validation: (Rule) => Rule.required().min(3).max(50),
        }),

        defineField({
            name: 'shortDescription',
            title: 'Descripción corta',
            type: 'string',
            group: 'information',
            validation: (Rule) => Rule.required().min(10).max(150),
        }),

        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            group: 'information',
            validation: (Rule) => Rule.required().min(15).max(2000),
        }),

        defineField({
            name: 'price',
            title: 'Precio',
            type: 'number',
            group: 'sales',
            validation: (Rule) => Rule.required().min(1),
        }),

        defineField({
            name: 'inStock',
            title: 'Disponible',
            type: 'boolean',
            group: 'sales',
            initialValue: true,
        }),

        defineField({
            name: 'featured',
            title: 'Destacado',
            type: 'boolean',
            group: 'sales',
            initialValue: false,
        }),

        defineField({
            name: 'slug',
            title: 'Dirección del producto',
            type: 'slug',
            group: 'information',
            description: 'Presiona “Generar” después de escribir el nombre.',   
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'string',
            group: 'information',
            options: {
                list: [
                { title: 'Electrónica', value: 'electronics' },
                { title: 'Hogar', value: 'home' },
                { title: 'Herramientas', value: 'tools' },
                { title: 'Cuidado personal', value: 'personal-care' },
                { title: 'Accesorios', value: 'accessories' },
                { title: 'Escolares', value: 'school' },
                { title: 'Otros', value: 'other' },
                ],
                layout: 'dropdown',
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'images',
            title: 'Fotografías',
            type: 'array',
            group: 'media',
            description: 'La primera fotografía será la portada del producto.',
            of: [
                {
                type: 'image',
                options: {
                    hotspot: true,
                },
                fields: [
                    {
                    name: 'alt',
                    title: 'Texto alternativo',
                    type: 'string',
                    description: 'Describe brevemente lo que aparece en la fotografía.',
                    validation: (Rule) => Rule.required(),
                    },
                ],
                },
            ],
            validation: (Rule) => Rule.required().min(1).max(6),
        }),
    ],

    preview:{
        select: {
            title: 'name',
            price: 'price',
            inStock: 'inStock',
            media: 'images.0',
        },

        prepare({title, price, inStock, media}) {
            const stockState = inStock === false ? 'Agotado' : 'Disponible'
            const priceState = typeof price === 'number' ? `$${price}` : 'Sin precio'

            return{
                title: title,
                subtitle: `${priceState} - ${stockState}`, 
                media: media
            }
        }
    }
})