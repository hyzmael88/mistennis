export default{
    name: 'facebookUser',
    type: 'document',
    title: 'Facebook User',
    hooks: {
        async create(user) {
          user.registerDate = new Date();
        }
      },
    
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
        },
        {
            name: 'facebookId',
            title: 'Facebook ID',
            type: 'string',
        },
        {
            name: 'picture',
            title: 'Picture',
            type: 'string'
        },
        {
            name: 'registerDate',
            title: 'Register Date',
            type: 'datetime'
          },
          {
            name: 'cart',
            title: 'Cart',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                {
                  name: 'product',
                  type: 'reference',
                  to: [{type: 'product'}]
                },
                {
                  name: 'size',
                  type: 'reference',
                  to: [{type: 'size'}]
                },
                {
                  name: 'quantity',
                  type: 'number'
                }
              ]
            }]
          }
    ]
}