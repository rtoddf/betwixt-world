import {defineField, defineType} from 'sanity'

export const neighborhood = defineType({
  name: 'neighborhood',
  title: 'Neighborhood',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Hood Name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date Moved In',
      type: 'string',
    }),
    defineField({
      name: 'themeSong',
      title: 'Theme Song Available',
      type: 'boolean',
    }),
    defineField({
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
    }),
  ],
})