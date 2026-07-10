import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Betwixt',

  projectId: 'cizm0hkb',
  dataset: 'pr',

  plugins: [structureTool({structure}), visionTool(), imageHotspotArrayPlugin()],

  schema: {
    types: schemaTypes,
  },
})
