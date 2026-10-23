import {defineField, defineType} from 'sanity'

export const commClip = defineType({
  name: 'commClip',
  title: 'Comm Clips',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'copy', title: 'Copy'},
    {name: 'audio', title: 'Audio'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
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
      group: 'content',
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
      group: 'content',
    }),
    defineField({
      name: 'resident',
      title: 'Resident',
      type: 'reference',
      to: [{type: 'resident'}],
      options: {
        filter: 'defined(imageTetherComm)',
      },
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Launched',
      type: 'date',
      group: 'content',
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      group: 'audio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'script',
      title: 'Script',
      type: 'array',
      of: [{type: 'block'}],
      group: 'audio',
    }),
  ],
})
