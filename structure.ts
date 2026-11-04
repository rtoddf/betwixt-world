import {type StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('World Settings')
        .id('world')
        .child(S.document().schemaType('world').documentId('world')),
      S.listItem()
        .title('Not Found')
        .id('notFound')
        .child(S.document().schemaType('notFound').documentId('notFound')),
      S.listItem()
        .title('Hood Map')
        .id('hoodMap')
        .child(S.document().schemaType('hoodMap').documentId('hoodMap')),
      S.divider(),

      S.listItem()
        .title('Sidekicks')
        .id('sidekicks')
        .child(
          S.documentList()
            .title('Sidekicks')
            .filter('_type == "resident" && residentType == "sidekick"')
            .schemaType('resident')
            .initialValueTemplates(S.initialValueTemplateItem('resident-sidekick')),
        ),

      S.listItem()
        .title('Visitors')
        .id('visitors')
        .child(
          S.documentList()
            .title('Visitors')
            .filter('_type == "resident" && residentType == "visitor"')
            .schemaType('resident')
            .initialValueTemplates(S.initialValueTemplateItem('resident-visitor')),
        ),

      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() !== 'world' && item.getId() !== 'notFound' && item.getId() !== 'hoodMap',
      ),
    ])
