import {defineField, defineType} from 'sanity'

export const hoodMap = defineType({
  name: 'hoodMap',
  title: 'Hood Map',
  type: 'document',
  fields: [
    defineField({
      name: 'mapImage',
      title: 'Map Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hoodMarkers',
      title: 'Hood Markers',
      type: 'array',
      of: [
        {
          name: 'hoodMarker',
          type: 'object',
          fields: [
            {name: 'x', type: 'number', readOnly: true, initialValue: 50},
            {name: 'y', type: 'number', readOnly: true, initialValue: 50},
            {
              name: 'neighborhood',
              type: 'reference',
              to: [{type: 'neighborhood'}],
              options: {
                filter: 'date <= now()',
              },

              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      options: {
        imageHotspot: {
          imagePath: 'mapImage',
        },
      },
    }),
  ],
  preview: {
    select: {
      media: 'mapImage',
    },
    prepare({media}) {
      return {
        title: 'Hood Map',
        media,
      }
    },
  },
})
