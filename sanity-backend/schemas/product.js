export default {
    name: 'product',
    type: 'document',
      title: 'Product',
    fields: [
      
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      }
      ,
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number'
      },
      {
        name: 'details',
        title: 'Details',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to:[{
          type: 'category'
        }]
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'reference',
        to:[{
          type: 'gender'
        }]
      },
      {
        name: 'stock',
        title: 'Stock',
        type:'number'
      },
      {
        name: 'sales',
        title: 'Sales',
        type: 'number'
      },
      
      {
        name: 'image',
        title: 'Imagen',
        type: 'image',
        options:{
          hotspot: true
        }
      }
    ]
  }