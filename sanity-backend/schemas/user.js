export default{
    name: 'user',
    type: 'document',
    title: 'User',
    
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
          }
    ]
}