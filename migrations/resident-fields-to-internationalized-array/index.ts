import {at, defineMigration, set} from 'sanity/migrate'

// Why this migration exists: quote, miniBio, shortBio, tag, shareText, and
// pronunciation just changed from plain string/text/portable-text fields to
// internationalizedArray fields (see residents.ts + sanity.config.ts). That
// schema change does NOT touch existing documents — it only changes what
// shape *new* edits are saved in. Every resident already published (64 as
// of writing) still has the old plain-string data sitting in these fields.
// Once the new schema is deployed, Studio expects an array of
// {_key, _type, language, value} objects here, not a plain string — so
// without this migration, all that existing copy would effectively vanish
// from the edit form and from the site (the frontend queries look for the
// new shape too). This migration re-wraps the existing value as the
// English ("en") entry in the new array, so nothing is lost.
//
// Safe to run more than once: each field check only fires when the value is
// still in the OLD shape (a plain string, or an array of portable-text
// blocks). Once a field has been migrated, the check no longer matches, so
// re-running this later is a no-op for already-migrated documents.
//
// How to run this (from betwixt-world):
//   npx sanity migrations run resident-fields-to-internationalized-array
//     -> dry run by default; prints the patches without writing anything
//   npx sanity migrations run resident-fields-to-internationalized-array --no-dry-run --dataset pr
//     -> actually writes the changes. "pr" is the dataset the live site
//        reads from (see src/lib/api.ts in betwixt-next), NOT the dataset
//        literally named "production" (that one's empty).

const STRING_FIELDS = ['quote', 'tag', 'shareText', 'pronunciation'] as const
const TEXT_FIELDS = ['miniBio'] as const

// Array item keys just need to be unique within their own array (each of
// these arrays only has one item, "en", right after migration), so a short
// random string is enough — no need for a cryptographic-strength key here.
function randomKey() {
  return Math.random().toString(36).slice(2, 12)
}

export default defineMigration({
  title: 'resident-fields-to-internationalized-array',
  documentTypes: ['resident'],

  migrate: {
    document(doc) {
      const patches = []

      for (const field of STRING_FIELDS) {
        const value = doc[field]
        if (typeof value === 'string' && value.length > 0) {
          patches.push(
            at(
              field,
              set([
                {
                  _key: randomKey(),
                  _type: 'internationalizedArrayStringValue',
                  language: 'en',
                  value,
                },
              ]),
            ),
          )
        }
      }

      for (const field of TEXT_FIELDS) {
        const value = doc[field]
        if (typeof value === 'string' && value.length > 0) {
          patches.push(
            at(
              field,
              set([
                {
                  _key: randomKey(),
                  _type: 'internationalizedArrayTextValue',
                  language: 'en',
                  value,
                },
              ]),
            ),
          )
        }
      }

      // shortBio is Portable Text: in the OLD shape it's an array whose
      // items are blocks (_type: 'block'). In the NEW shape it's an array
      // whose single item is a language wrapper (_type:
      // 'internationalizedArrayBlockContentValue') that itself CONTAINS the
      // array of blocks as its `value`. Checking the first item's _type is
      // what tells old shape from new.
      const shortBio = doc.shortBio
      if (Array.isArray(shortBio) && shortBio.length > 0 && shortBio[0]?._type === 'block') {
        patches.push(
          at(
            'shortBio',
            set([
              {
                _key: randomKey(),
                _type: 'internationalizedArrayBlockContentValue',
                language: 'en',
                value: shortBio,
              },
            ]),
          ),
        )
      }

      return patches
    },
  },
})
