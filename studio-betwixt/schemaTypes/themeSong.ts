import {defineField, defineType} from 'sanity'

export const themeSong = defineType({
  name: 'themeSong',
  title: 'Theme Song',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'audio', title: 'Audio'},
    {name: 'prompts', title: 'Prompts'},
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'date',
      title: 'Theme Song Launched',
      type: 'date',
      group: 'content',
    }),
    defineField({
      name: 'songPreview',
      title: 'Preview',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'resident',
      title: 'Resident',
      type: 'reference',
      to: [{type: 'resident'}],
      options: {
        filter: 'hood->slug.current == $hood',
        filterParams: {hood: 'jukebox'},
      },
      group: 'content',
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      validation: (Rule) => Rule.required(),
      group: 'audio',
    }),
    defineField({
      name: 'previewAudioFile',
      title: 'Preview Audio File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      group: 'audio',
    }),
    defineField({
      name: 'stylePrompt',
      title: 'Style Prompts',
      type: 'text',
      group: 'prompts',
    }),
  ],
})
