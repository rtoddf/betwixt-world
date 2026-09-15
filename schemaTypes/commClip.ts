import {defineField, defineType} from 'sanity'

export const commClip = defineType({
  name: 'commClip',
  title: 'Comm Clips',
  type: 'document',
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
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'string',
      options: {
        list: [
          {title: 'Personality', value: 'personality'},
          {title: 'Promotion', value: 'promotion'},
          {title: 'News Flash', value: 'newsflash'},
          {title: 'Radio Call In', value: 'radiocallin'},
        ],
      },
    }),
    defineField({
      name: 'resident',
      title: 'Resident',
      type: 'reference',
      to: [{type: 'resident'}],
      options: {
        filter: 'defined(imageTetherComm)',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Launched',
      type: 'date',
    }),
  ],
})
