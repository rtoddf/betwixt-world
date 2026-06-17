import {type StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('World Settings')
        .id('world')
        .child(S.document().schemaType('world').documentId('world')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'world'),
    ])
