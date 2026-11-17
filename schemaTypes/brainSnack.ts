import {defineField, defineType} from 'sanity'

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

      return {
        title: title,
        subtitle: resName + ' · ' + snackType,
      }
    },
  },
})
