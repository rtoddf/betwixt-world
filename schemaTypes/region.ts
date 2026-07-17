import {defineField, defineType} from 'sanity'

export const region = defineType({
  name: 'region',
  title: 'Region',
  type: 'document',
  groups: [
    {name: 'branding', title: 'Branding', default: true},
    {name: 'meta', title: 'Meta'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'branding',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      group: 'branding',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'branding',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'branding',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      group: 'branding',
    }),
    defineField({
      name: 'date',
      title: 'Date Launched',
      type: 'date',
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
