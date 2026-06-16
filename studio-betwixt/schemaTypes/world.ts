import {defineField, defineType} from 'sanity'

export const world = defineType({
  name: 'world',
  title: 'World',
  type: 'document',
  groups: [
    {name: 'branding', title: 'Branding', default: true},
    {name: 'meta', title: 'Meta'},
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'branding',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'branding',
    }),
    defineField({
      name: 'defaultOgDescription',
      title: 'Default OG Description',
      type: 'text',
      group: 'meta',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default OG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
