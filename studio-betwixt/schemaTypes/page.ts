import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
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
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
    }),
    defineField({
      name: 'slots',
      title: 'Slots',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'slot',
          title: 'Slot',
          fields: [
            defineField({
              name: 'columnCount',
              title: 'Column Count',
              type: 'string',
              options: {
                list: [
                  {title: 'One Column', value: 'one'},
                  {title: 'Two Columns', value: 'two'},
                  {title: 'Three Columns', value: 'three'},
                  {title: 'Four Columns', value: 'four'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'hide',
              title: 'Hide Slot',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'components',
              title: 'Components',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'textBlock',
                  title: 'Text Block',
                  fields: [
                    defineField({
                      name: 'headline',
                      title: 'Headline',
                      type: 'string',
                    }),
                    defineField({
                      name: 'text',
                      title: 'Text',
                      type: 'array',
                      of: [
                        {type: 'block'},
                        {
                          type: 'image',
                          options: {hotspot: true},
                          fields: [
                            defineField({
                              name: 'float',
                              title: 'Float',
                              type: 'string',
                              options: {
                                list: [
                                  {title: 'None', value: 'none'},
                                  {title: 'Left', value: 'left'},
                                  {title: 'Right', value: 'right'},
                                ],
                              },
                              initialValue: 'none',
                            }),
                          ],
                        },
                      ],
                    }),
                  ],
                },
                {
                  type: 'object',
                  name: 'tileGrid',
                  title: 'Tile Grid',
                  fields: [
                    defineField({
                      name: 'headline',
                      title: 'Headline',
                      type: 'string',
                    }),
                  ],
                },
                {
                  type: 'object',
                  name: 'jukebox',
                  title: 'Jukebox',
                  fields: [
                    defineField({
                      name: 'headline',
                      title: 'Headline',
                      type: 'string',
                    }),
                  ],
                },
                {
                  type: 'object',
                  name: 'hoodHeader',
                  title: 'Hood Header',
                  fields: [
                    defineField({
                      name: 'headline',
                      title: 'Headline',
                      type: 'string',
                    }),
                    defineField({
                      name: 'dataSource',
                      title: 'Data Source',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Random', value: 'random'},
                          {title: 'Static', value: 'static'},
                        ],
                      },
                      initialValue: 'random',
                    }),
                  ],
                },
                {
                  type: 'object',
                  name: 'tile',
                  title: 'Tile',
                  fields: [
                    defineField({
                      name: 'headline',
                      title: 'Headline',
                      type: 'string',
                    }),
                    defineField({
                      name: 'dataSource',
                      title: 'Data Source',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Random', value: 'random'},
                          {title: 'Static', value: 'static'},
                        ],
                      },
                      initialValue: 'random',
                    }),
                  ],
                },
                {
                  type: 'object',
                  name: 'shopTease',
                  title: 'Shop Tease',
                  fields: [
                    defineField({
                      name: 'eyebrowText',
                      title: 'Eyebrow Text',
                      type: 'string',
                    }),
                    defineField({
                      name: 'headline',
                      title: 'Headline',
                      type: 'string',
                    }),
                    defineField({
                      name: 'text',
                      title: 'Text',
                      type: 'array',
                      of: [{type: 'block'}],
                      validation: (Rule) => Rule.required().max(160),
                    }),
                    defineField({
                      name: 'buttonPretext',
                      title: 'Button Pretext',
                      type: 'string',
                    }),
                    defineField({
                      name: 'buttonText',
                      title: 'Button Text',
                      type: 'string',
                    }),
                    defineField({
                      name: 'buttonLink',
                      title: 'Button Link',
                      type: 'string',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
