import {defineConfig, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'Betwixt',

  projectId: 'cizm0hkb',
  dataset: 'pr',

  plugins: [
    structureTool({structure}),
    visionTool(),
    imageHotspotArrayPlugin(),
    colorInput(),
    // Powers field-level translation on resident fields (quote, miniBio,
    // shortBio, tag, shareText, pronunciation — see residents.ts). Each
    // registered field type below becomes an `internationalizedArray<Type>`
    // schema type you can use in place of the plain type, e.g. 'string'
    // becomes 'internationalizedArrayString'. Add a language here whenever
    // a resident needs a third language.
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'es', title: 'Spanish'},
        {id: 'it', title: 'Italian'},
      ],
      fieldTypes: [
        'string',
        'text',
        // shortBio is Portable Text (rich text), not a plain string, so it
        // needs its own registered shape here. This mirrors shortBio's
        // current `array of block` definition in residents.ts — if you ever
        // add custom marks/styles to shortBio, mirror the change here too.
        defineField({
          name: 'blockContent',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
