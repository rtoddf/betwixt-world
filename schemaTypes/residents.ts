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
    {name: 'meta', title: 'Meta'},
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
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pronunciation',
      title: 'Pronunciation',
      // Localized: internationalizedArrayString renders one input per
      // language (English/Spanish) instead of a single plain string.
      // Registered in sanity.config.ts's internationalizedArray plugin.
      type: 'internationalizedArrayString',
      group: 'content',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'internationalizedArrayString',
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
      name: 'regions',
      title: 'Regions',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'region'}]}],
      group: 'content',
      validation: (Rule) => Rule.max(2).error('You can add a maximum of 2 regions.'),
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
      type: 'internationalizedArrayString',
      group: 'copy',
    }),
    defineField({
      name: 'miniBio',
      title: 'Mini Bio Copy',
      // internationalizedArrayText, not ...String, because miniBio was a
      // multi-line 'text' field, not a single-line 'string'.
      type: 'internationalizedArrayText',
      group: 'copy',
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio Copy',
      // internationalizedArrayBlockContent matches the 'blockContent' shape
      // registered in sanity.config.ts. No 'of' here — the plugin-generated
      // type already fully defines the field, unlike the plain array type
      // this replaced.
      type: 'internationalizedArrayBlockContent',
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
      title: 'SVG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'images',
    }),
    defineField({
      name: 'imageInactive',
      title: 'Inactive SVG Image',
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
      description: 'Do the hotspot and crop',
    }),
    defineField({
      name: 'imagePngInactive',
      title: 'Inactive PNG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'images',
      description: 'Do the hotspot and crop',
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
    defineField({
      name: 'shareText',
      title: 'Share Text',
      type: 'internationalizedArrayString',
      group: 'meta',
    }),
  ],
})
