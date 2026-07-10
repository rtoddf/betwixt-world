import {at, defineMigration, set} from 'sanity/migrate'

export default defineMigration({
  title: 'resident-slug-to-native-slug-type',
  documentTypes: ['resident'],

  migrate: {
    document(doc, context) {
      if (typeof doc.slug === 'string') {
        return at('slug', set({_type: 'slug', current: doc.slug}))
      }
    },
  },
})
