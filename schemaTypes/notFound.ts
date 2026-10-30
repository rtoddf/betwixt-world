import {defineField, defineType} from 'sanity'
import {slotsField} from './slots'

export const notFound = defineType({
  name: 'notFound',
  title: 'Not Found',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'slots', title: 'Slots'},
  ],
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().max(235),
    }),
    defineField({
      name: 'imagePng',
      title: 'PNG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Do the hotspot and crop',
    }),
    slotsField,
  ],
})
