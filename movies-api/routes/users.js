const express = require('express');

//const UsersService = require('../services/users');
//const validationHandler = require('../utils/middleware/validationHandler');

//const { userIdSchema } = require('../utils/schemas/users');
//const { createUserSchema } = require('../utils/schemas/users');

function usersApi(app) {
    const router = express.Router();
    app.use('/api/users', router);
    
    const UsersService = new UsersService();

    /*router.get('/', validationHandler({ userId: userIdSchema }), 
    async (req, res, next) => {
        
    })*/
}

module.exports = usersApi;
