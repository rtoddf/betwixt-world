import {defineField, defineType} from 'sanity'
import {slotsField} from './slots'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'media', title: 'Theme & Media'},
    {name: 'meta', title: 'Meta'},
    {name: 'shop', title: 'Shop'},
    {name: 'slots', title: 'Slots'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
    }),
    slotsField,
  ],
})
