import {at, set, defineMigration, unset} from 'sanity/migrate'

export default defineMigration({
  title: 'resident-nationality-to-heritage',
  documentTypes: ['resident'],

  migrate: {
    document(doc, context) {
      if (typeof doc.nationality === 'string') {
        return [at('heritage', set(doc.nationality)), at('nationality', unset())]
      }
    },
  },
})
