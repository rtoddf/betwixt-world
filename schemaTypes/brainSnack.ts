import {defineField, defineType} from 'sanity'

const snackTypeLabels: Record<string, string> = {
  trueFalse: 'True/False',
  multipleChoice: 'Multiple Choice',
  info: 'Info',
}

export const brainSnack = defineType({
  name: 'brainSnack',
  title: 'Brain Snack',
  type: 'document',
  fields: [
    defineField({
      name: 'snackType',
      title: 'Snack Type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'True/False', value: 'trueFalse'},
          {title: 'Multiple Choice', value: 'multipleChoice'},
          {title: 'Info', value: 'info'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'prompt',
      title: 'Prompt/Question',
      type: 'text',
      hidden: ({document}) => document?.snackType == 'info',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.snackType === 'info') return true
          if (!value) return 'Quiz snacks need a question'
          return true
        }),
    }),

    defineField({
      name: 'trueFalseAnswer',
      title: 'True/False answer',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'True', value: 'true'},
          {title: 'False', value: 'false'},
        ],
      },
      hidden: ({document}) => document?.snackType != 'trueFalse',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.snackType !== 'trueFalse') return true
          if (!value) return 'True/False need an answer'
          return true
        }),
    }),

    defineField({
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'answer',
          fields: [
            defineField({
              name: 'text',
              title: 'text',
              type: 'string',
            }),
            defineField({
              name: 'isCorrect',
              title: 'Is Correct',
              type: 'boolean',
            }),
          ],
          preview: {
            select: {
              title: 'text',
            },
          },
        },
      ],
      hidden: ({document}) => document?.snackType != 'multipleChoice',
    }),

    defineField({
      name: 'explanation',
      title: 'Explanation of the answer',
      type: 'text',
      hidden: ({document}) => document?.snackType == 'info',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.snackType === 'info') return true
          if (!value) return 'Quiz snacks need a question'
          return true
        }),
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => document?.snackType != 'info',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.snackType !== 'info') return true
          if (!value || value.length === 0) return 'Info snacks need a body'
          return true
        }),
    }),
    defineField({
      name: 'resident',
      title: 'Resident',
      type: 'reference',
      to: {type: 'resident'},
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    // plain object, sibling of fields
    select: {
      // select is also an object
      title: 'title',
      name: 'resident.name',
      snackType: 'snackType',
    },
    prepare({title, name, snackType}) {
      // destructure your select keys
      const resName = name ? name : ''
      const snackTypeName = snackType ? snackTypeLabels[snackType] : ''

      return {
        title: title,
        subtitle: resName + ' · ' + snackTypeName,
      }
    },
  },
})
