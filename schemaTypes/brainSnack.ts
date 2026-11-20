import {defineField, defineType} from 'sanity'

const snackTypeLabels: Record<string, string> = {
  trueFalse: 'True/False',
  multipleChoice: 'Multiple Choice',
  wordOfTheDay: 'Word of the Day',
  info: 'Info',
}

export const brainSnack = defineType({
  name: 'brainSnack',
  title: 'Brain Snack',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'question', title: 'Question Stuff'},
    {name: 'more', title: 'More stuff if needed'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'date',
      group: 'content',
    }),
    defineField({
      name: 'snackType',
      title: 'Snack Type',
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
      validation: (Rule) => Rule.required(),
      group: 'question',
    }),
    defineField({
      name: 'prompt',
      title: 'Prompt/Question',
      type: 'text',
      hidden: ({document}) =>
        document?.snackType == 'info' || document?.snackType == 'wordOfTheDay',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (
            context.document?.snackType === 'info' ||
            context.document?.snackType === 'wordOfTheDay'
          )
            return true
          if (!value) return 'Quiz snacks need a question'
          return true
        }),
      group: 'question',
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
      group: 'question',
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
              isCorrect: 'isCorrect',
            },
            prepare({title, isCorrect}) {
              return {
                title: title,
                subtitle: isCorrect == true ? '✓ Correct' : '',
              }
            },
          },
        },
      ],
      group: 'question',
      hidden: ({document}) => document?.snackType != 'multipleChoice',
      validation: (Rule) =>
        Rule.custom<{isCorrect?: boolean}[]>((value, context) => {
          if (context.document?.snackType !== 'multipleChoice') return true
          if (!value || value.length < 3 || value.length > 5)
            return 'Multiple choice needs 3 to 5 answers.'
          const count = value.filter((answer) => answer?.isCorrect === true).length
          if (count !== 1) return 'one answer must be correct.'
          return true
        }),
    }),
    defineField({
      name: 'explanation',
      title: 'Explanation of the answer',
      type: 'text',
      group: 'question',
      hidden: ({document}) =>
        document?.snackType == 'info' || document?.snackType == 'wordOfTheDay',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (
            context.document?.snackType === 'info' ||
            context.document?.snackType === 'wordOfTheDay'
          )
            return true
          if (!value) return 'Quiz snacks need a explanation'
          return true
        }),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
      group: 'question',
      hidden: ({document}) =>
        document?.snackType != 'info' && document?.snackType != 'wordOfTheDay',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (
            context.document?.snackType !== 'info' &&
            context.document?.snackType !== 'wordOfTheDay'
          )
            return true
          if (!value || value.length === 0) return 'Info and Word of the Day snacks need a body'
          return true
        }),
    }),
    defineField({
      name: 'resident',
      title: 'Resident',
      type: 'reference',
      to: {type: 'resident'},
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'moreInfo',
      title: 'More Info',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
        }),
      ],
      group: 'more',
    }),
    defineField({
      name: 'snackArt',
      title: 'Snack Art (override)',
      type: 'reference',
      to: {type: 'snackArt'},
      description: 'Leave empty to use the default art for this snack type.',
      group: 'more',
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
