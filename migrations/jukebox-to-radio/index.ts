import {at, defineMigration, set} from 'sanity/migrate'

// Same shape as migrations/juekboxTease-to-radioTease — this is the Full
// Jukebox version of that exact rename. Only two things differ from that
// file: the _type we're matching ('jukebox' instead of 'juekboxTease') and
// the value we're setting ('radio' instead of 'radioTease').
export default defineMigration({
  title: 'jukebox-to-radio',
  documentTypes: ['page'],

  migrate: {
    document(doc, context) {
      // `doc.slots` is this page's array of layout slots. Each slot has
      // its own `components` array — the actual content blocks a producer
      // dropped into that slot in the Studio. The block we're after (the
      // Full Jukebox) lives on the "Radio" page document, nested two
      // array levels deep — not a plain top-level field — so we have to
      // walk both arrays to find it.
      const slots = doc.slots as
        | Array<{_key: string; components?: Array<{_key: string; _type: string}>}>
        | undefined
      if (!slots) return

      for (const slot of slots) {
        if (!slot.components) continue

        for (const component of slot.components) {
          if (component._type === 'jukebox') {
            // Sanity can't address an array item by its position — items
            // can get reordered, so index isn't a stable address. Every
            // array item carries its own `_key` instead, and a patch path
            // addresses one by wrapping that key: `{_key: '...'}`.
            // This path reads as: "in this doc's `slots` array, find the
            // slot with this _key, then in ITS `components` array, find
            // the component with this _key, then set its `_type` field."
            return at(
              ['slots', {_key: slot._key}, 'components', {_key: component._key}, '_type'],
              set('radio'),
            )
          }
        }
      }
    },
  },
})
