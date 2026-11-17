import {defineField, defineType} from 'sanity'

export const snackArt = defineType({
  name: 'snackArt',
  title: 'Snack Art',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'SVG Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'defaultFor',
      title: 'Default for',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'True/False', value: 'trueFalse'},
          {title: 'Multiple Choice', value: 'multipleChoice'},
          {title: 'Info', value: 'info'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
