import { config, collection, fields } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : {
          kind: 'github',
          repo: {
            owner: 'romanobenit',
            name: 'GIOIA',
          },
        },

  ui: {
    brand: { name: 'GIO.I.A' },
  },

  collections: {
    blog: collection({
      label: 'Articoli blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Titolo', validation: { isRequired: true } },
          slug: {
            label: 'Slug URL',
            description: 'Generato automaticamente dal titolo. Modifica solo se necessario.',
          },
        }),
        date: fields.date({
          label: 'Data di pubblicazione',
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: 'Autore',
          defaultValue: 'Staff GIO.I.A',
        }),
        category: fields.select({
          label: 'Categoria',
          options: [
            { label: 'Notizie', value: 'Notizie' },
            { label: 'Eventi', value: 'Eventi' },
            { label: 'Storie', value: 'Storie' },
          ],
          defaultValue: 'Notizie',
        }),
        coverImage: fields.text({
          label: 'Immagine di copertina',
          description: "Percorso dell'immagine, es: /images/blog/nome.jpg",
          defaultValue: '/images/blog/placeholder.svg',
        }),
        excerpt: fields.text({
          label: 'Estratto',
          description: "Breve descrizione che appare nell'anteprima (1-2 righe).",
          multiline: true,
          validation: { isRequired: true },
        }),
        content: fields.document({
          label: 'Contenuto',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
  },
});
