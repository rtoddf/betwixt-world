import {defineField, defineType} from 'sanity'

export const resident = defineType({
  name: 'resident',
  title: 'Resident',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'media', title: 'Theme & Media'},
    {name: 'copy', title: 'Copy'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pronunciation',
      title: 'Pronunciation',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      options: {
        list: [
          {title: 'He/Him', value: 'he/him'},
          {title: 'She/Her', value: 'she/her'},
          {title: 'They/Them', value: 'they/them'},
        ],
      },
      group: 'content',
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'hood',
      title: 'Hood',
      type: 'reference',
      to: [{type: 'neighborhood'}],
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date Moved In',
      type: 'date',
      group: 'content',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      group: 'content',
    }),
    defineField({
      name: 'miniBio',
      title: 'Mini Bio Copy',
      type: 'text',
      group: 'copy',
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio Copy',
      type: 'text',
      group: 'copy',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'media',
    }),
    defineField({
      name: 'imageInactive',
      title: 'Inactive Image',
      type: 'image',
      group: 'media',
    }),
    defineField({
      name: 'voiceFile',
      title: 'File For Voice',
      type: 'file',
      group: 'media',
    }),
  ],
})
