import {defineField, defineType} from 'sanity'

export const resident = defineType({
  name: 'resident',
  title: 'Resident',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'images', title: 'Images'},
    {name: 'audio', title: 'Audio'},
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
      name: 'quote',
      title: 'Quote',
      type: 'string',
      group: 'copy',
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
      type: 'array',
      of: [{type: 'block'}],
      group: 'copy',
    }),
    defineField({
      name: 'stamp',
      title: 'Stamp',
      type: 'image',
      group: 'images',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'images',
    }),
    defineField({
      name: 'imagePng',
      title: 'PNG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'images',
    }),
    defineField({
      name: 'imageInactive',
      title: 'Inactive Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'images',
    }),
    defineField({
      name: 'imagePngInactive',
      title: 'Inactive PNG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'images',
    }),
    defineField({
      name: 'voiceFile',
      title: 'File For Voice',
      type: 'file',
      group: 'audio',
    }),
    defineField({
      name: 'voiceMusicFile',
      title: 'File For Music under Voice',
      type: 'file',
      group: 'audio',
    }),
    defineField({
      name: 'transcript',
      title: 'Transcript for Closed Caption',
      type: 'text',
      group: 'audio',
    }),
    defineField({
      name: 'voiceId',
      title: 'Id For Voice',
      type: 'string',
      group: 'audio',
    }),
    defineField({
      name: 'voicePrompt',
      title: 'Prompt For Voice',
      type: 'text',
      group: 'audio',
    }),
    defineField({
      name: 'voiceScript',
      title: 'Script For Voice',
      type: 'text',
      group: 'audio',
    }),
  ],
})
