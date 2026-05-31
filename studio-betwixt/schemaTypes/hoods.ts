import {defineField, defineType} from 'sanity'

export const neighborhood = defineType({
  name: 'neighborhood',
  title: 'Neighborhood',
  type: 'document',
  groups: [
    {name: 'media', title: 'media'},
    // { name: 'content', title: 'Content' },
    // { name: 'media', title: 'Media' },
    // { name: 'settings', title: 'Settings' },
  ],
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
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'media',
    }),
    defineField({
      name: 'themeSong',
      title: 'Theme Song Available',
      type: 'file',
      group: 'media',
    }),
    defineField({
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
      group: 'media',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
    }),
  ],
})
