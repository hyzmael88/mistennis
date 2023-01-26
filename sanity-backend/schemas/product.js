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
        name: 'category',
        title: 'Category',
        type: 'reference',
        to:[{
          type: 'category'
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