export default {
  name: 'news',
  type: 'document',
  title: 'Noutăți',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titlu',
    },
    {
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Conținut',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagine',
    },
    {
      name: 'file',
      type: 'file',
      title: 'Atașament (Nu imagine)',
    }
  ]
}