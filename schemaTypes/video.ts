import {defineField, defineType} from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {accept: 'video/*'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'date',
    }),
    defineField({
      name: 'resident',
      title: 'Resident',
      type: 'reference',
      to: {type: 'resident'},
      options: {
        filter: '!defined(residentType) || residentType == "resident"',
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'captions',
      title: 'Captions',
      type: 'file',
      options: {accept: '.vtt'},
    }),
  ],
  preview: {
    // plain object, sibling of fields
    select: {
      // select is also an object
      title: 'title', // your key: 'field path'
      name: 'resident.name',
      poster: 'image',
    },
    prepare({title, name, poster}) {
      // destructure your select keys
      const resName = name ? name : ''

      return {
        title,
        subtitle: resName,
        media: poster,
      }
    },
  },
})
