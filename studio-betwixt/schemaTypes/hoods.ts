import {defineField, defineType} from 'sanity'

export const neighborhood = defineType({
  name: 'neighborhood',
  title: 'Neighborhood',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'media', title: 'Theme & Media'},
    {name: 'meta', title: 'Meta'},
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
      name: 'region',
      title: 'Region',
      type: 'reference',
      to: [{type: 'region'}],
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
      name: 'imagePng',
      title: 'PNG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'media',
      description: 'Do the hotspot and crop',
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
      name: 'shareText',
      title: 'Share Text',
      type: 'string',
      group: 'meta',
    }),
  ],
})
