export default{
    name: 'user',
    type: 'document',
    title: 'User',
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
            name: 'registerDate',
            title: 'Register Date',
            type: 'datetime'
          },
          {
            name: 'cart',
            title: 'Cart',
            type: 'reference',
            to: [{type: 'cart'}],
          }
    ]
}