import {at, defineMigration, set} from 'sanity/migrate'

export default defineMigration({
  title: 'juekboxTease-to-radioTease',
  documentTypes: ['page'],

  migrate: {
    document(doc, context) {
      // `doc.slots` is this page's array of layout slots. Each slot has
      // its own `components` array — the actual content blocks a producer
      // dropped into that slot in the Studio.
      const slots = doc.slots as
        | Array<{_key: string; components?: Array<{_key: string; _type: string}>}>
        | undefined
      if (!slots) return

      for (const slot of slots) {
        if (!slot.components) continue

        for (const component of slot.components) {
          if (component._type === 'juekboxTease') {
            // Sanity can't address an array item by its position — items
            // can get reordered, so index isn't a stable address. Every
            // array item carries its own `_key` instead, and a patch path
            // addresses one by wrapping that key: `{_key: '...'}`.
            // This path reads as: "in this doc's `slots` array, find the
            // slot with this _key, then in ITS `components` array, find
            // the component with this _key, then set its `_type` field."
            return at(
              ['slots', {_key: slot._key}, 'components', {_key: component._key}, '_type'],
              set('radioTease'),
            )
          }
        }
      }
    },
  },
})
