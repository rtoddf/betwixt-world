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
          {title: 'Word of the Day', value: 'wordOfTheDay'},
          {title: 'Info', value: 'info'},
        ],
      },
    }),
    defineField({
      name: 'correctAnswerResponse',
      title: 'Default correct answer response',
      type: 'string',
      description: 'Use {answer} where the correct answer goes',
    }),
    defineField({
      name: 'incorrectAnswerResponse',
      title: 'Default incorrect answer response',
      type: 'string',
      description: 'Use {answer} where the correct answer goes',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
