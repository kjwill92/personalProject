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
    }

} 