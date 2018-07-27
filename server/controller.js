const axios = require('axios');

module.exports = {
    getAllProducts: (req, res)=>{
        const db = req.app.get('db')
        db.getProducts().then(products => res.send(products))
    },
    // makeRequest: (req, res) => {
    //     const {first_name, last_name, email, phone, date, content} = req.body;
    //     req.app.get('db').makeRequests([first_name, last_name, email, phone])
    //     .then(customer => {
    //         const {id} = customer[0]
    //         req.app.get('db').addOrder([content, date, id]).then(response => res.sendStatus(201))
    //     })
        
    // }
    makeRequest: async (req, res) => {
        const {first_name, last_name, email, phone, date, content} = req.body;
        const db = req.app.get('db');
        const customer = await db.makeRequests([first_name, last_name, email, phone])
        await db.addOrder([content, date, customer[0].id])

        res.sendStatus(200)
    },
    makeNewProduct: async (req, res) => {
        const {product_name, product_pic, description} = req.body;
        const db = req.app.get('db');
        const newProd = await db.makeNewProduct([product_name, product_pic, description])
        res.send(newProd)
    },
    getAllOrders: (req, res) => {
        const db = req.app.get('db')
        db.getOrders().then(orders => res.send(orders))
    },
    getSingleProduct: (req, res) => {
        const db = req.app.get('db')
        db.getSingle(req.params.id).then(product => res.send(product))
    },
    updateProducts: (req, res) => {
        const {id} = req.params;
        const {product_name, product_pic, description} = req.body;
        const db = req.app.get('db')
        db.updateProduct([product_name, product_pic, description, id]).then(products => res.send(products))

    },
    removeProducts: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.removeProduct([id]).then(products => res.send(products))
    },
    removeOrders: (req, res) => {
        const {id, customer} = req.params
        const db = req.app.get('db')
        db.removeOrder([id, customer]).then(orders => {
            res.send(orders)})
    },

    //--------------------------------------------------------
    authCallback: async (req, res)=> {
        // code from auth0 on req.query.code
        let payload = {
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: `${process.env.PROTOCOL}://${req.headers.host}/auth/callback`
        };
        //post request to exchange the code for a token
        let responseWithToken = await axios.post(`https://${process.env.REACT_APP_DOMAIN}/oauth/token`, payload);
        //use token to get user data of who just logged in
        let userData = await axios.get(`https://${process.env.REACT_APP_DOMAIN}/userinfo?access_token=${responseWithToken.data.access_token}`);
        
        const db = req.app.get('db');
        let {sub, name} = userData.data;
        // userData.data.email -> check in list of approved emails
        // req.session.user = { isAdmin: bool }
        let userExists = await db.find_user([sub]);
        if(userExists[0]){
            req.session.user = userExists[0];
            res.redirect(`${process.env.FRONTEND_DOMAIN}/#/admin/showcase`)
        } else {
            res.redirect(`${process.env.FRONTEND_DOMAIN}/#/`)
        }
    },
    userData: (req, res)=> {
        if(req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('Nice try sucka')
        }
    },
    logout: (req, res)=> {
        req.session.destroy()
        res.redirect('http://localhost:3000/#/')
    }

} 