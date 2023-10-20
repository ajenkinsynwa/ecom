export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image' }], //Sanity Image field Sanity of image field
      options: {
        hotspot: true, //Sanity hotspot Property of Image Tab Enbales user interface for selecting what areas to crop 
      }
    },

    {
      name: 'name', 
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug', //URL unique string for name 
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', //unique slide based on name
        maxLength: 90,
    }
  },
  {
    name: 'price',
    title: 'Price',
    type: 'number',
  },
  {
    name: 'details',
    title: 'Details',
    type: 'string'
  }

  ]
}