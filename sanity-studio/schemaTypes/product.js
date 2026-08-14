import {defineField, defineType } from 'sanity';

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',

    fields: [
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
            validation: (Rule) => Rule.required().min(3).max(50),
        }),

        defineField({
            name: 'shortDescription',
            title: 'Descripción corta',
            type: 'string',
            validation: (Rule) => Rule.required().min(10).max(150),
        }),

        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            validation: (Rule) => Rule.required().min(15).max(2000),
        }),

        defineField({
            name: 'price',
            title: 'Precio',
            type: 'number',
            validation: (Rule) => Rule.required().min(1),
        }),

        defineField({
            name: 'inStock',
            title: 'Disponible',
            type: 'boolean',
            initialValue: true,
        }),

        defineField({
            name: 'featured',
            title: 'Destacado',
            type: 'boolean',
            initialValue: false,
        }),

        defineField({
            name: 'slug',
            title: 'Dirección del producto',
            type: 'slug',
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
            const stockState = inStock ? 'Disponible' : 'Agotado'

            return{
                title: title,
                subtitle: `$${price} - ${stockState}`, 
                media: media
            }
        }
    }
})