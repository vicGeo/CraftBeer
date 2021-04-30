const bcrypt = require('bcryptjs');



const users = [
    {
        name: 'Admin User',
        email: 'admin@craftbeer.es',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Victor Sanchis',
        email: 'vicsanig@gmail.com',
        password: xxxxbcrypt.hashSync('123456', 10)
    },
    {
        name: 'Cristina Ahumada',
        email: 'cristina@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
];


module.exports= users;
