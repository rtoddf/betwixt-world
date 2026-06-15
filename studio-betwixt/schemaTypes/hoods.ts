import {defineField, defineType} from 'sanity'

export const neighborhood = defineType({
  name: 'neighborhood',
  title: 'Neighborhood',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'media', title: 'Theme & Media'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Hood Name',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'date',
      title: 'Date Moved In',
      type: 'date',
      group: 'content',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      group: 'content',
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
  ],
})
