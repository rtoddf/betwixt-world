import {defineField, defineType} from 'sanity'

export const resident = defineType({
  name: 'resident',
  title: 'Resident',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'pronunciation',
      title: 'Pronunciation',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),
    defineField({
      name: 'hood',
      title: 'Hood',
      type: 'string',
    }),
    defineField({
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      options: {
        list: [
          { title: 'He/Him', value: 'he/him' },
          { title: 'She/Her', value: 'she/her' },
          { title: 'They/Them', value: 'they/them' },
        ],
      },
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string',
    }),
    defineField({
      name: 'miniBio',
      title: 'Mini Bio Copy',
      type: 'text',
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio Copy',
      type: 'text',
    }),
    defineField({
      name: 'voiceFile',
      title: 'File For Voice',
      type: 'file',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
    }),
  ],
})